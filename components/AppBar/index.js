import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import UserNav from './UserNav'
import LeftDrawer from './LeftDrawer'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NewAppBar(props) {
  const classes = useStyles()
  // const userState = useSelector(state => state.userState)
  // const { userData } = userState

  const [state, setState] = React.useState({
    drawerOpen: false,
  })

  const toggleDrawer = () => {
    setState({ ...state, drawerOpen: !state.drawerOpen })
  }

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton onClick={toggleDrawer} className={classes.menuButton} color="inherit" aria-label="menu" edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Landify
          </Typography>
          <UserNav />
        </Toolbar>
      </AppBar>
      <LeftDrawer open={state.drawerOpen} toggleDrawer={toggleDrawer} />
    </div>
  );
}