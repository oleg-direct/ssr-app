import { Auth } from 'aws-amplify'
import { Grid, Box, TextField, Alert, Button } from '@mui/material';
import { formMessages } from '@utils/formMessages'
import { useForm } from "react-hook-form";
import { formRegex } from '@utils/formRegex'
import { useRouter } from 'next/router';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const ForgotPasswordSubmitForm = (props) => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [formSubmitting, setFormSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  async function onSubmit(data) {
    const { email, newPassword, authCode } = data;
    
    setFormSubmitting(true);
    setErrorMessage('');
    try {
      await Auth.forgotPasswordSubmit(email, authCode, newPassword).then(() => {
        router.push('/auth/sign-in');
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
            type="email"
            id="email"
            label="Email"
            variant="outlined"
            {...register("email", {
              required: { value: true, message: formMessages.email.required },
              pattern: { value: formRegex.email.valid, message: formMessages.email.invalid, },
            })}
            error={errors.email ? true : false}
            helperText={errors.email ? errors.email.message : ""}
            disabled={formSubmitting}
            fullWidth />
        </Box>
        <Box sx={{
          marginBottom: 2,
        }}>
          <TextField
            type="password"
            id="newPassword"
            label="Password"
            {...register("newPassword", {
              required: { value: true, message: formMessages.password.required },
              pattern: { value: formRegex.password.valid, message: formMessages.password.invalid, },
            })}
            error={errors.newPassword ? true : false}
            helperText={errors.newPassword ? errors.newPassword.message : ""}
            disabled={formSubmitting}
            fullWidth />
        </Box>
        <Box sx={{
          marginBottom: 2,
        }}>
          <TextField
            type="test"
            id="authCode"
            label="Code"
            {...register("authCode", {
              required: { value: true, message: formMessages.authCode.required },
            })}
            error={errors.authCode ? true : false}
            helperText={errors.authCode ? errors.authCode.message : ""}
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