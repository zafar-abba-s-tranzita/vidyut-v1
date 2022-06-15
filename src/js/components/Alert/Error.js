import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { COLOR } from '../../../styles/Color'
 
export default function ErrorAlert(props) {
  return (
    <Stack sx={{ width: '100%', mt: props.marginTop }} spacing={2} >
      <Alert variant="outlined" severity="error">
           <b style={{color: COLOR.TYPO_BASE6}}>  { props ? props.errorInfo : '' } </b>
      </Alert>
    </Stack>
  );
}