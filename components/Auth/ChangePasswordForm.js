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

const ForgotPasswordSubmitForm = (props) => {
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
    const { oldPassword, newPassword } = data;

    console.log('oldPassword', oldPassword)
    console.log('newPassword', newPassword)
    
    setFormSubmitting(true);
    setErrorMessage('');
    // try {
    //   await Auth.forgotPasswordSubmit(email, authCode, newPassword).then(() => {
    //     router.push('/auth/sign-in');
    //   })
    // } catch (error) {
    //   setFormSubmitting(false);
    //   setErrorMessage(error.message);
    // }
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
            type="password"
            id="oldPassword"
            label="Old Password"
            {...register("oldPassword", {
              required: { value: true, message: formMessages.oldPassword.required },
            })}
            error={errors.oldPassword ? true : false}
            helperText={errors.oldPassword ? errors.oldPassword.message : ""}
            disabled={formSubmitting}
            fullWidth />
        </Box>
        <Box className={classes.inputWrap}>
          <TextField
            type="password"
            id="newPassword"
            label="New Password"
            {...register("newPassword", {
              required: { value: true, message: formMessages.newPassword.required },
              pattern: { value: formRegex.password.valid, message: formMessages.password.invalid, },
            })}
            error={errors.newPassword ? true : false}
            helperText={errors.newPassword ? errors.newPassword.message : ""}
            disabled={formSubmitting}
            fullWidth />
        </Box>
        <Box className={classes.submitWrap}>
          <Button
            type="submit"
            variant="contained"
            disabled={formSubmitting}>
              Update
          </Button>
        </Box>
      </Box>
    </Grid>
  </Grid>
  )
}

export default ForgotPasswordSubmitForm