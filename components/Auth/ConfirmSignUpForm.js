import { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Grid, Box, TextField, Alert, Button } from '@mui/material';
import { formMessages } from '@utils/formMessages'
import { formRegex } from '@utils/formRegex'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';

const ConfirmSignUpForm = (props) => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [formSubmitting, setFormSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  async function onSubmit(data) {
    const { email, authCode } = data;
    setFormSubmitting(true);
    setErrorMessage('');
    try {
      await Auth.confirmSignUp(email, authCode).then((user) => {
        router.push('/account');
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
            type="text"
            id="authCode"
            label="Confirmation Code"
            {...register("authCode", {
              required: { value: true, message: formMessages.authCode.required }
            })}
            error={errors.authCode ? true : false}
            helperText={errors.authCode ? errors.authCode.message : ""}
            disabled={formSubmitting}
            fullWidth />
        </Box>
        <Box sx={{
          marginBottom: 2,
        }}>
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

export default ConfirmSignUpForm