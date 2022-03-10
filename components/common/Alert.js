import React from 'react'
import Alert from '@material-ui/lab/Alert'
import { withStyles } from '@material-ui/core/styles'

const StyledAlert = withStyles({
  root: {
    width: '100%'
  },
})(Alert);

const MuiAlert = (props) => {
  return (
    <StyledAlert {...props} />
  )
}

export default MuiAlert