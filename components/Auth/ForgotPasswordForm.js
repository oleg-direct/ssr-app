import { useState } from 'react';
import { Auth } from 'aws-amplify'
import { Grid, Box, Alert, AlertTitle, Button, Typography } from '@mui/material';
import { formMessages } from '@utils/formMessages'
import { useForm } from "react-hook-form";
import MuiInput from '@components/common/Input';
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPasswordSchema } from '@utils/yupSchema';

const ForgotPasswordForm = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formSubmitting, setFormSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });

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
    <Grid xs={11} sx={{
      p: 5,
      borderRadius: 3,
      background: '#ffffff'
    }}>
      <Grid item>
      {successMessage !== '' &&
        <Box sx={{mb: 4 }}>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            {successMessage}
          </Alert>
        </Box>
      }
      {errorMessage !== '' &&
        <Box sx={{mb: 4 }}>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {errorMessage}
          </Alert>
        </Box>
      }
      <Typography variant="h3" gutterBottom>
        Forgot Password
      </Typography>
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
            fullWidth />
        </Box>
        <Box>
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={formSubmitting}>
              Send
          </Button>
        </Box>
      </Box>
    </Grid>
  </Grid>
  )
}

export default ForgotPasswordForm