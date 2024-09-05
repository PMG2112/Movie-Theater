import { Stack, Typography } from '@mui/material';
import React from 'react';

export default function Footer() {
  return (
    <Stack
      component="footer"
      sx={{
        paddingTop: 4,
        paddingBottom: 4,
        flexDirection: { sm: 'row' },
        justifyContent: { sm: 'space-between' },
        alignItems: { sm: 'center'},
        marginTop: 'auto',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} &laquo;Movie Theater&raquo; 18+ <br />
        This site was created for informational purposes only. <br />
        All rights belong to the copyright holders.
      </Typography>

      <Typography variant="h5" color="primary.main">
        Movie Theater
      </Typography>
    </Stack>
  );
}
