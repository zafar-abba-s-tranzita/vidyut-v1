import React from 'react'
import { Grid, Typography } from '@mui/material';
import { borderRadius, Box } from '@mui/system';
import SmallAuto from "../../../../../images/AutoRckshawSmall.svg"
import { InfoOutlined } from '@mui/icons-material';

function UserBox(props) {
  return (
    <Box sx={{
        height: '22vh', width: '90vw', background: 'linear-gradient(270deg, #438279 45.03%, rgba(67, 130, 121, 0.31) 100%)', mt: -10, outline: '1px solid #03646333', borderRadius: 4, outlineOffset: -2, boxShadow: '0px 4px 20px 3px rgba(3, 100, 99, 0.05)',
        display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'
        }}>
        
    <img src={SmallAuto} alt="VT Auto" style={{width: '32vw'}}/>    
    <Box color={'#fff'}>
        <Grid item>
          <Typography fontSize={14} fontWeight={500}>
            {props.u_info ? props.u_info.name : null}
          </Typography>
          <Typography  fontSize={11} fontWeight={600} letterSpacing={'2.5%'}>
            {props.u_info ? props.u_info.vehicleStatsList[0].vehicleRegNumber.toUpperCase() : null}
          </Typography>
          <br />
          <Typography fontSize={10} fontWeight={500}>
            Running Plan <InfoOutlined sx={{fontSize: '12px'}} />
          </Typography>
          <Typography  fontSize={12} fontWeight={600}>
            ₹3.50/ Kms
          </Typography>
        </Grid>
    </Box>
    </Box>
  )
}

export default UserBox