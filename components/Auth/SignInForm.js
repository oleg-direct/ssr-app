
import { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Grid, Box, TextField, Alert, Button } from '@mui/material';
import { formMessages } from '@utils/formMessages';
import { formRegex } from '@utils/formRegex';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import MuiInput from '@components/common/Input';
import MuiPassword from '@components/common/Password';

const SignInForm = (props) => {
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
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={formSubmitting}>
              Sign In
          </Button>
        </Box>
      </Box>
    </Grid>
  </Grid>
  )
}

export default SignInForm