import React from 'react'
import { Typography } from '@material-ui/core'
import Link from './Link'
import { withStyles } from '@material-ui/core/styles'

const StyledLogo = withStyles((theme) => ({
  root: {
    marginBottom: 30,
    display: 'inline-block',
    '&:hover': {
      textDecoration: 'none',
    }
  }
}))(Typography)

const StyledLogoLink = withStyles((theme) => ({
  root: {
    marginBottom: 30,
    display: 'inline-block',
    '&:hover': {
      textDecoration: 'none',
    }
  }
}))(Typography)

const Logo = (props) => {
  const { islink } = props

  if(islink) {
    return (
      <StyledLogoLink variant="h3" component={Link} href="/">
        Landify
      </StyledLogoLink>
    )
  } else {
    return (
      <StyledLogo variant="h3">
        Landify
      </StyledLogo>
    )
  }
}

export default Logo