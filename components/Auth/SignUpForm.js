import { useState } from 'react';
import { Auth } from 'aws-amplify'
import { Grid, Box, AlertTitle, Alert, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import Link from 'next/link'
import { MuiInput, MuiPassword, SubmitButton} from '@components/common';
import { yupResolver } from "@hookform/resolvers/yup";
import { singUpSchema } from '@utils/yupSchema';

const SignUpForm = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [formSubmitting, setFormSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(singUpSchema),
  });

  async function onSubmit(data) {
    const { name, email, password } = data;

    setFormSubmitting(true);
    setErrorMessage('');

    try {
      await Auth.signUp({ name: name, username: email, password, attributes: { email, name }}).then((user) => {
        console.log('success', user)
        // router.push('/account');
      })
    } catch (error) {
      setFormSubmitting(false);
      setErrorMessage(error.message);
    }
  }

  return (
      <Grid xs={11} sm={8} md={10} lg={8} xl={6} sx={{
        p: 5,
        borderRadius: 3,
        background: '#ffffff'
      }}>
        {errorMessage !== '' &&
          <Box sx={{mb: 4 }}>
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {errorMessage}
            </Alert>
          </Box>
        }
        <Typography variant="h3" gutterBottom>
          Sign up
        </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box>
          <MuiInput
            label="Name"
            id="name"
            type="text"
            register={register("name")}
            error={errors.name ? true : false}
            helperText={errors.name ? errors.name.message : ""}
            disabled={formSubmitting}
            fullWidth
          />
        </Box>
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
        <Box>
          <SubmitButton loading={formSubmitting}>
            Sign Up
          </SubmitButton>
        </Box>
        <Box sx={{marginTop: 3, textAlign: "center"}}>
          <Typography variant="body1">
            Already have an account? <Link href="/auth/sign-in">Sign in</Link>
          </Typography>
        </Box>
      </Box>
    </Grid>
  )
}

export default SignUpForm