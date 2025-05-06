// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, Toolbar } from '@mui/material';

const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <Toolbar />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/player-comparison">
          <ListItemText primary="Player Comparison" />
        </ListItem>
        <ListItem button component={Link} to="/injury-timeline">
          <ListItemText primary="Injury Timeline" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
