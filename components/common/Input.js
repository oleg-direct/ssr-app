import React from 'react';
import { FormControl, InputLabel, OutlinedInput, FormHelperText } from '@mui/material';

const MuiInput = (props) => {
  const { register, label, type, id, error, helperText, fullWidth, defaultValue, disabled } = props

  return (
    <FormControl variant="outlined" sx={{ mb: 2 }} fullWidth={fullWidth}>
      <InputLabel htmlFor={id} error={error}>{label}</InputLabel>
      <OutlinedInput
        {...register}
        id={id}
        name={id}
        type={type}
        disabled={disabled}
        error={error}
        label={label}
        fullWidth={fullWidth}
        defaultValue={defaultValue}
      />
      <FormHelperText error={error}>{helperText}</FormHelperText>
    </FormControl>
  )
}

export default MuiInput