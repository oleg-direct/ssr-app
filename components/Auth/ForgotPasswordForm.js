import { Auth } from 'aws-amplify'
import { Grid, Box, Alert, Button, CircularProgress } from '@mui/material';
import { formMessages } from '@utils/formMessages'
import { formRegex } from '@utils/formRegex'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import MuiInput from '@components/common/Input';

const ForgotPasswordForm = (props) => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formSubmitting, setFormSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  async function onSubmit(data) {
    const { email } = data;
    setFormSubmitting(true);
    setErrorMessage('');
    try {
      await Auth.forgotPassword(email).then((res) => {
        setFormSubmitting(false);
        setSuccessMessage(formMessages.forgotPasswordForm.success)
        
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
        <Box>
          <MuiInput
            label="Email"
            id="email"
            type="email"
            register={register("email", {
              required: { value: true, message: formMessages.email.required },
              pattern: { value: formRegex.email.valid, message: formMessages.email.invalid, },
            })}
            error={errors.email ? true : false}
            helperText={errors.email ? errors.email.message : ""}
            disabled={formSubmitting}
            fullWidth />
        </Box>
        <Box>
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={formSubmitting}>
              Confirm
          </Button>
        </Box>
      </Box>
    </Grid>
  </Grid>
  )
}

export default ForgotPasswordForm