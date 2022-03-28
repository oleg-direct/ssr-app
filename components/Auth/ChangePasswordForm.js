import { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Grid, Box, Alert, AlertTitle } from '@mui/material';
import { useForm } from "react-hook-form";
import { MuiPassword, SubmitButton} from '@components/common';
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangePasswordSchema } from '@utils/yupSchema';

const ForgotPasswordSubmitForm = (props) => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formSubmitting, setFormSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(ChangePasswordSchema),
  });

  async function onSubmit(data) {
    const { currentPassword, newPassword } = data;

    setFormSubmitting(true);
    setErrorMessage('');

    try {
      await Auth.currentAuthenticatedUser().then((user) => {
        return Auth.changePassword(user, currentPassword, newPassword)
          .then((data) => {
            setFormSubmitting(false);
            setSuccessMessage('Your password has been updated');
          })
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
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box sx={{mb: 2 }}>
          <MuiPassword
            label="Current Password"
            id="currentPassword"
            register={register("currentPassword")}
            error={errors.currentPassword ? true : false}
            helperText={errors.currentPassword ? errors.currentPassword.message : ""}
            disabled={formSubmitting}
            fullWidth />
        </Box>
        <Box>
          <MuiPassword
            id="newPassword"
            label="New Password"
            register={register("newPassword")}
            error={errors.newPassword ? true : false}
            helperText={errors.newPassword ? errors.newPassword.message : ""}
            disabled={formSubmitting}
            fullWidth />
        </Box>
        <Box>
          <MuiPassword
            id="confirmNewPassword"
            label="Confirm New Password"
            register={register("confirmNewPassword")}
            error={errors.confirmNewPassword ? true : false}
            helperText={errors.confirmNewPassword ? errors.confirmNewPassword.message : ""}
            disabled={formSubmitting}
            fullWidth />
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