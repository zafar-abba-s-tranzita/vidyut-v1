import React, { useCallback } from 'react'
import Welcome from '../../../images/1SPLASH SCREEN.png'
import VtLogo from "../../../images/VTlogo4 3.png"
import Logo from "../../assets/images/onboarding-svg/logo.svg"
import autoEv from "../../../images/apremium-electric-sports-sedan-car-isolated.png"
import Mail from "../../../images/mail.png"
import Phone from "../../../images/phone.png"
import { Checkbox, Grid, NativeSelect, Typography, OutlinedInput, InputAdornment, Button, Stack, Switch } from '@mui/material'

import LoginWithEmail from './loginWithEmail'
import { COLOR } from '../../../styles/Color'
import { CallOutlined, KeyboardArrowDown, LanguageRounded } from '@mui/icons-material'
import LogginSelector from './LogginSelection/LogginSelector'




function Login() {
    const [show, setShow] = React.useState(true);


    setInterval(() => {
        setShow(false)
       }, 3000);
  return (
       <>
       {show && ( <img src={Welcome} style={{height: '100vh', width: '100vw' }} /> ) }
       {!show && ( 
            <Grid container sx={{background: '#fff', height: '100vh'}}>
                <Grid item sx={{position: 'absolute', right: 2, p: 3}}>
                <NativeSelect
                    defaultValue={'En'}
                    inputProps={{
                    id: 'uncontrolled-native',
                    }}
                    startAdornment={
                        <LanguageRounded sx={{color: COLOR.PRIMARY_COLOR2, mr: 1}} />
                    }
                    IconComponent={KeyboardArrowDown}
                    sx={{border: '1px solid #DEE3E3', width: 130, p: 1, borderRadius: 2}}
                    disableUnderline

                >
                    <option value={'En'}> English </option>
                    <option value={'Hi'}> हिन्दी </option>
                </NativeSelect>
                </Grid>
               
                <Grid item sx={{mt: 10, p: 2 }}>
                    <Typography fontSize={24} fontWeight={600} color={COLOR.TYPO_BASE1}>  {/* LATO */}
                        Welcome! 👋
                    </Typography>
                    <Typography fontSize={12} fontWeight={600} color={COLOR.TYPO_BASE4}>  {/* OPEN SANS */}
                         Please login using mobile number or with email 
                    </Typography>
                </Grid>
                
                <Grid container item sx={{p: 2, mt: -30}}>
                   <LogginSelector />
                </Grid>

                <Grid item sx={{position: 'absolute', bottom: 30, left: '40%'}}>
                    <img src={Logo} />
                </Grid>
            </Grid>
       )}
       </>
  )
}

export default Login