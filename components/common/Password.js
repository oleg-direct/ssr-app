import React from 'react'
import { Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { InputAdornment, IconButton } from '@mui/icons-material'

const MuiPassword = (props) => {
  const { loading } = props

  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <Field
      component={TextField}
      type={showPassword ? 'text' : 'password'}
      label="Password"
      name="password"
      variant="outlined"
      disabled={loading}
      fullWidth
      required
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}

export default MuiPassword