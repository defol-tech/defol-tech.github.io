import React from 'react';
import { Typography, Box } from '@mui/material';

export const AppTitle: React.FC = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h2" component="h1" sx={{
        fontWeight: 'bold',
        background: 'linear-gradient(90deg, #00ffff 0%, #4f46e5 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block'
      }}>
        DefolTech
      </Typography>
    </Box>
  );
};
