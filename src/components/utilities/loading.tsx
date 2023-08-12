import { ReactElement } from 'react';
import { Box, CircularProgress } from '@mui/material';

export default function Loading(): ReactElement {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}
