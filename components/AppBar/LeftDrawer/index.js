import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Link from '../../common/Link';

export default function LeftDrawer(props) {
  const { open, toggleDrawer } = props

  const list = () => (
      <List>
        <ListItem onClick={() => toggleDrawer()} component={Link} href="/" button>
          <ListItemText primary={'Home'} />
        </ListItem>
      </List>
  );

  return (
    <Drawer open={open} onClose={() => toggleDrawer()}>
      {list()}
    </Drawer>
  );
}