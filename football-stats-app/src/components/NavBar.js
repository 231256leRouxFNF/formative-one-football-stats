// src/components/NavBar.jsx
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, Box } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import CompareIcon from '@mui/icons-material/Compare';
import TimelineIcon from '@mui/icons-material/Timeline';
import ShareIcon from '@mui/icons-material/Share';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

export default function NavBar() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          bgcolor: '#1e1e1e',
          color: 'white',
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap>
          ⚽ StatsBoard
        </Typography>
      </Toolbar>
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon><SportsSoccerIcon sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/compare">
            <ListItemIcon><CompareIcon sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Compare" />
          </ListItem>
          <ListItem button component={Link} to="/timeline">
            <ListItemIcon><TimelineIcon sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Timeline" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><ShareIcon sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Share" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
