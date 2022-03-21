import React from 'react';
import { IconButton, FormControl, InputLabel, OutlinedInput, InputAdornment, FormHelperText } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const MuiPassword = (props) => {
  const { register, label, id, error, helperText, loading } = props
  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <InputLabel htmlFor={id} error={error}>{label}</InputLabel>
      <OutlinedInput
        {...register}
        id={id}
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
      />
      <FormHelperText error={error}>{helperText}</FormHelperText>
    </FormControl>
  )
}

export default MuiPassword