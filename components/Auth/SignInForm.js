
import { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Grid, Box, Alert, AlertTitle, Link } from '@mui/material';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import { MuiInput, MuiPassword, SubmitButton} from '@components/common';
import { yupResolver } from "@hookform/resolvers/yup";
import { singInSchema } from '@utils/yupSchema';

const SignInForm = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [formSubmitting, setFormSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(singInSchema),
  });

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
            register={register("email")}
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
            register={register("password")}
            error={errors.password ? true : false}
            helperText={errors.password ? errors.password.message : ""}
            disabled={formSubmitting}
            fullWidth
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Link href="/auth/forgot-password">Forgot Password?</Link>
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