import { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Grid, Box, TextField, Alert, Button, CircularProgress } from '@mui/material';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import MuiInput from '@components/common/Input';
import { yupResolver } from "@hookform/resolvers/yup";
import { ConfirmSignUpSchema } from '@utils/yupSchema';

const ConfirmSignUpForm = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [formSubmitting, setFormSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(ConfirmSignUpSchema),
  });

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
          <MuiInput
            label="Confirmation Code"
            id="authCode"
            type="text"
            register={register("authCode")}
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
              Confirm
          </Button>
        </Box>
      </Box>
    </Grid>
  </Grid>
  )
}

export default ConfirmSignUpForm