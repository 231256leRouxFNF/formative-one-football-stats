// src/components/Footer.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box component="footer" sx={{ p: 2, textAlign: 'center', mt: 'auto', backgroundColor: '#f5f5f5' }}>
    <Typography variant="body2" color="textSecondary">
      © {new Date().getFullYear()} Premier League Stats App
    </Typography>
  </Box>
);

export default Footer;
