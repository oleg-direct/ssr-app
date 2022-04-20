import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { Grid, Box, Alert, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import { MuiInput, SubmitButton} from '@components/common';
import { yupResolver } from "@hookform/resolvers/yup";
import { ConfirmSignUpSchema } from '@utils/yupSchema';

const ConfirmSignUpForm = () => {
  const router = useRouter();
  // console.log(router.query);
  const { email, code} = router.query
  const [errorMessage, setErrorMessage] = useState('');
  const [formSubmitting, setFormSubmitting] = useState(false);

  useEffect(() => {

  }, [])

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
    <Grid xs={11} sx={{
        p: 5,
        borderRadius: 3,
        background: '#ffffff'
      }}>
      {errorMessage !== '' &&
        <Box>
          <Alert severity="error">
            {errorMessage}
          </Alert>
        </Box>
      }
      <Typography variant="h3" gutterBottom>
        Confirm Sign up
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
            defaultValue={email}
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
            defaultValue={code}
            fullWidth />
        </Box>
        <Box>
          <SubmitButton loading={formSubmitting}>
            Confirm
          </SubmitButton>
        </Box>
      </Box>
  </Grid>
  )
}

export default ConfirmSignUpForm