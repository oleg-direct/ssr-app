import { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Grid, Box, TextField, Alert, Button } from '@mui/material';
import { formMessages } from '@utils/formMessages'
import { formRegex } from '@utils/formRegex'
import { useForm } from "react-hook-form";
import CircularProgress from '@mui/material/CircularProgress';

const ForgotPasswordSubmitForm = (props) => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formSubmitting, setFormSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  async function onSubmit(data) {
    const { currentPassword, newPassword } = data;

    setFormSubmitting(true);
    setErrorMessage('');

    try {
      await Auth.currentAuthenticatedUser().then((user) => {
        return Auth.changePassword(user, currentPassword, newPassword)
          .then((data) => {
            setFormSubmitting(false);
            setSuccessMessage('Your password has been updated');
          })
      })
    } catch (error) {
      setFormSubmitting(false);
      setErrorMessage(error.message);
    }
  }

  return (
    <Grid 
      container
      direction="row"
      justifyContent="center"
      alignItems="center">
      <Grid item xs={6}>
      {formSubmitting === true &&
        <Box>
          <CircularProgress />
        </Box>
      }
      {successMessage !== '' &&
        <Box>
          <Alert severity="success">
            {successMessage}
          </Alert>
        </Box>
      }
      {errorMessage !== '' &&
        <Box>
          <Alert severity="error">
            {errorMessage}
          </Alert>
        </Box>
      }
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box sx={{
          marginBottom: 2,
        }}>
          <TextField
            type="password"
            id="currentPassword"
            label="Current Password"
            {...register("currentPassword", {
              required: { value: true, message: formMessages.currentPassword.required },
            })}
            error={errors.currentPassword ? true : false}
            helperText={errors.currentPassword ? errors.currentPassword.message : ""}
            disabled={formSubmitting}
            fullWidth />
        </Box>
        <Box sx={{
          marginBottom: 2,
        }}>
          <TextField
            type="password"
            id="newPassword"
            label="New Password"
            {...register("newPassword", {
              required: { value: true, message: formMessages.newPassword.required },
              pattern: { value: formRegex.password.valid, message: formMessages.password.invalid, },
            })}
            error={errors.newPassword ? true : false}
            helperText={errors.newPassword ? errors.newPassword.message : ""}
            disabled={formSubmitting}
            fullWidth />
        </Box>
        <Box>
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={formSubmitting}>
              Update
          </Button>
        </Box>
      </Box>
    </Grid>
  </Grid>
  )
}

export default ForgotPasswordSubmitForm