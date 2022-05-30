import React from 'react'
import { useLocation } from 'react-router-dom'
import AppBar from "../../../components/AppBar/AppBar"
import { Grid } from '@mui/material';
import { borderRadius, Box } from '@mui/system';
import SmallAuto from "../../../../images/AutoRckshawSmall.svg"

function Dashboard() {
    const location = useLocation();
  return (
    <Grid container style={{background: 'linear-gradient(to right, #ffffff, #f8f8f8)', height: '100vw'}}>
    <AppBar />
            <Grid container item xs={12} alignItems="center" justifyContent="center">
                <Box sx={{
                    height: '22vh', width: '90vw', background: 'linear-gradient(270deg, #438279 45.03%, rgba(67, 130, 121, 0.31) 100%)', mt: -10, outline: '1px solid #03646333', borderRadius: 4, outlineOffset: -2, boxShadow: '0px 4px 20px 3px rgba(3, 100, 99, 0.05)',
                    display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'
                    }}>
                    
                <img src={SmallAuto} alt="VT Auto" style={{width: '35vw'}}/>    
                <Box color={'#fff'}>
                    {location.state.vechNum} <br />
                    {location.state.vechNum} <br />
                    {location.state.vechNum} <br />
                </Box>

                </Box>
            </Grid>
    </Grid>
  )
}   

export default Dashboard