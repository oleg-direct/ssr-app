import React from 'react';
import { IconButton, FormControl, InputLabel, OutlinedInput, InputAdornment, FormHelperText } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const MuiPassword = (props) => {
  const { register, label, id, error, helperText, fullWidth, loading } = props
  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <FormControl variant="outlined" sx={{ mb: 2 }} fullWidth={fullWidth}>
      <InputLabel htmlFor={id} error={error}>{label}</InputLabel>
      <OutlinedInput
        {...register}
        id={id}
        name={id}
        type={showPassword ? 'text' : 'password'}
        disabled={loading}
        error={error}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
        fullWidth={fullWidth}
      />
      <FormHelperText error={error}>{helperText}</FormHelperText>
    </FormControl>
  )
}

export default MuiPassword