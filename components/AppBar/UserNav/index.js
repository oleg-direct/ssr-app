import React from 'react'
import { inject, observer } from "mobx-react"
import Link from '../../common/Link'
import { useRouter } from 'next/router'
import {
  MenuItem,
  Button,
  Avatar,
  Menu,
  Chip
} from '@material-ui/core'
// import AuthModal from '../../Auth/AuthModal'
// import { useAuth } from '../../../auth';

const UserNav = (props) => {
  const { modalOpen, openSignInModal, openSignUpModal, signOut } = props.store.auth
  const { uid, email, photoURL } = props.store.user
  const router = useRouter()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const userData = {}

  const handleCloseModal = () => {
    // dispatch({ type: 'AUTH_MODAL_OPEN', modalOpen: false })
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    setAnchorEl(null)
  }

  const guestNav = () => {
    return (
      <>
        <Button variant="contained" color="primary" onClick={() => openSignInModal()}>
          Sign In
        </Button>
        <Button variant="contained" color="primary" onClick={() => openSignUpModal()}>
          Sign Up
        </Button>
      </>
    )
  }

  const userNav = (props) => {
    return (
      <>
        <Chip
          onClick={handleClick} 
          avatar={<Avatar alt={email} src={photoURL} />}
          label={email}
        />
        <Menu
          id="customized-menu"
          keepMounted
          getContentAnchorEl={null}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
          transformOrigin={{ vertical: 'top', horizontal: 'right', }}
        >
          <MenuItem onClick={() => handleClose()} component={Link} href="/dashboard">Dashboard</MenuItem>
          <MenuItem onClick={() => handleClose()} component={Link} href="/dashboard/edit/about">Edit profile</MenuItem>
          <MenuItem onClick={() => handleClose()} component={Link} href="/preview/profiles/landscaping-king">View profile</MenuItem>
          <MenuItem onClick={() => handleClose()} component={Link} href="/dashboard/settings">Settings</MenuItem>
          <MenuItem onClick={() => handleClose()} component={Link} href="/help-center">Help</MenuItem>
          <MenuItem onClick={() => signOut(router.pathname)}>Logout</MenuItem>
        </Menu>
      </>
    )
  }

  const nav = () => {
    if(uid) {
      return userNav()
    } else {
      return guestNav()
    }
  }

  return (
    <React.Fragment>
      {nav()}
      {/* <AuthModal open={modalOpen} handleCloseModal={handleCloseModal} /> */}
    </React.Fragment>
  )
  
}

export default inject("store")(observer(UserNav))