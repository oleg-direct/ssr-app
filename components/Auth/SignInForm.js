
import { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Grid, Box, Alert, AlertTitle } from '@mui/material';
import { formMessages } from '@utils/formMessages';
import { formRegex } from '@utils/formRegex';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import { MuiInput, MuiPassword, SubmitButton} from '@components/common';

const SignInForm = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [formSubmitting, setFormSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  async function onSubmit(data) {
    const { email, password } = data;
    setFormSubmitting(true);
    setErrorMessage('');
    try {
      await Auth.signIn(email, password).then((user) => {
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
      {errorMessage !== '' &&
        <Box sx={{mb: 4 }}>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
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
            fullWidth
          />
        </Box>
        <Box>
          <MuiPassword
            label="Password"
            id="password"
            register={register("password", {
              required: { value: true, message: formMessages.password.required },
            })}
            error={errors.password ? true : false}
            helperText={errors.password ? errors.password.message : ""}
            disabled={formSubmitting}
            fullWidth
          />
        </Box>
        <Box>
          <SubmitButton loading={formSubmitting}>
            Sign In
          </SubmitButton>
        </Box>
      </Box>
    </Grid>
  </Grid>
  )
}

export default SignInForm