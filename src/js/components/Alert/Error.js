import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function ErrorAlert(props) {
  return (
    <Stack sx={{ width: '100%', mt: props.marginTop }} spacing={2} >
      <Alert variant="outlined" severity="error">
            { props ? props.errorInfo : '' }
      </Alert>
    </Stack>
  );
}