import { Auth } from 'aws-amplify'
import { Grid, Box, Alert, AlertTitle, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import { useState } from 'react';
import { MuiInput, MuiPassword, SubmitButton} from '@components/common';
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPasswordSubmitSchema } from '@utils/yupSchema';

const ForgotPasswordSubmitForm = (props) => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [formSubmitting, setFormSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(forgotPasswordSubmitSchema),
  });

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
    <Grid xs={11} sx={{
      p: 5,
      borderRadius: 3,
      background: '#ffffff'
    }}>
      <Typography variant="h3" gutterBottom>
        Update Password
      </Typography>
      <Grid item>
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
            type="password"
            id="newPassword"
            label="New Password"
            register={register("newPassword")}
            error={errors.newPassword ? true : false}
            helperText={errors.newPassword ? errors.newPassword.message : ""}
            disabled={formSubmitting}
            fullWidth
          />
        </Box>
        <Box>
          <MuiInput
            label="Code"
            id="authCode"
            type="text"
            register={register("authCode")}
            error={errors.authCode ? true : false}
            helperText={errors.authCode ? errors.authCode.message : ""}
            disabled={formSubmitting}
            fullWidth
          />
        </Box>
        <Box>
          <SubmitButton loading={formSubmitting}>
            Update
          </SubmitButton>
        </Box>
      </Box>
    </Grid>
  </Grid>
  )
}

export default ForgotPasswordSubmitForm