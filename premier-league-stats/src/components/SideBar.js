import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Drawer } from '@mui/material';

export default function Sidebar() {
  return (
    <Drawer variant="permanent" sx={{ width: 150, '& .MuiDrawer-paper': { width: 150 } }}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/comparison">
          <ListItemText primary="Player Comparison" />
        </ListItem>
        <ListItem button component={Link} to="/injuries">
          <ListItemText primary="Injury Timeline" />
        </ListItem>
      </List>
    </Drawer>
  );
}
