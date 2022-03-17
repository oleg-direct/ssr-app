import { Auth } from 'aws-amplify'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { formMessages } from '@utils/formMessages'
import { formRegex } from '@utils/formRegex'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import { useState } from 'react';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';

const useStyles = makeStyles({
  gridContainer: {
    // background: 'green'
  },
  formWrap: {
    // background: 'blue'
  },
  loadingWrap: {
    paddingBottom: 20,
  },
  errorWrap: {
    paddingBottom: 20,
  },
  inputWrap: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  submitWrap: {
    paddingTop: 12,
  },
});

const SignUpForm = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [formSubmitting, setFormSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  async function onSubmit(data) {
    const { name, email, password } = data;
    setFormSubmitting(true);
    setErrorMessage('');
    try {
      await Auth.signUp({ name: name, username: email, password, attributes: { email, name }}).then((user) => {
        console.log(user)
        router.push('/account');
      }).catch((error) => {
        setFormSubmitting(false);
        setErrorMessage(error.message);
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
      alignItems="center"
      className={classes.gridContainer}>
      <Grid item xs={6} className={classes.formWrap}>
      {formSubmitting === true &&
        <Box className={classes.loadingWrap}>
          <CircularProgress />
        </Box>
      }
      {errorMessage !== '' &&
        <Box className={classes.errorWrap}>
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
        <Box className={classes.inputWrap}>
          <TextField 
            id="name"
            label="Name"
            variant="outlined"
            {...register("name", {
              required: { value: true, message: formMessages.name.required },
              // maxLength: { value: 5, message: formMessages.name.maxLength }
            })}
            error={errors.name ? true : false}
            helperText={errors.name ? errors.name.message : ""}
            disabled={formSubmitting}
            fullWidth />
        </Box>
        <Box className={classes.inputWrap}>
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
        <Box className={classes.inputWrap}>
          <TextField
            type="password"
            id="password"
            label="Password"
            {...register("password", {
              required: { value: true, message: formMessages.password.required },
              pattern: { value: formRegex.password.valid, message: formMessages.password.invalid, },
            })}
            error={errors.password ? true : false}
            helperText={errors.password ? errors.password.message : ""}
            disabled={formSubmitting}
            fullWidth />
        </Box>
        <Box className={classes.submitWrap}>
          <Button
            type="submit"
            disabled={formSubmitting}
            variant="contained">
              Sign Up
          </Button>
        </Box>
      </Box>
    </Grid>
  </Grid>
  )
}

export default SignUpForm