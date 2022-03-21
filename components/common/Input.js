import React from 'react';
import { FormControl, InputLabel, OutlinedInput, FormHelperText } from '@mui/material';

const MuiInput = (props) => {
  const { register, label, type, id, error, helperText, fullWidth, loading } = props

  return (
    <FormControl variant="outlined" sx={{ mb: 2 }} fullWidth={fullWidth}>
      <InputLabel htmlFor={id} error={error}>{label}</InputLabel>
      <OutlinedInput
        {...register}
        id={id}
        name={id}
        type={type}
        disabled={loading}
        error={error}
        label={label}
        fullWidth={fullWidth}
      />
      <FormHelperText error={error}>{helperText}</FormHelperText>
    </FormControl>
  )
}

export default MuiInput