import { Auth } from 'aws-amplify'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { formMessages } from '@utils/formMessages'
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

const ForgotPasswordForm = (props) => {
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
    const { email } = data;
    setFormSubmitting(true);
    setErrorMessage('');
    try {
      await Auth.forgotPassword(email).then((res) => {
        console.log('forgotPassword', res); 
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
            type="email"
            id="email"
            label="Email"
            variant="outlined"
            {...register("email", {
              required: { value: true, message: formMessages.email.required },
              // maxLength: { value: 5, message: formMessages.email.maxLength }
            })}
            error={errors.email ? true : false}
            helperText={errors.email ? errors.email.message : ""}
            disabled={formSubmitting}
            fullWidth />
        </Box>
        <Box className={classes.submitWrap}>
          <Button
            type="submit"
            variant="contained"
            disabled={formSubmitting}>
              Confirm
          </Button>
        </Box>
      </Box>
    </Grid>
  </Grid>
  )
}

export default ForgotPasswordForm