import React from 'react'
import { styled } from '@mui/material/styles';
import { Checkbox, Grid, NativeSelect, Typography, OutlinedInput, InputAdornment, Button, Stack, Switch, Divider } from '@mui/material'
import { COLOR } from '../../../../styles/Color'
import { Call, CallOutlined, EmailOutlined, KeyboardArrowDown, LanguageRounded, Mail } from '@mui/icons-material'
import SwipeOTPBox from '../components/SwipeOTPBox';

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));

function LogginSelector() {

    const [activeBtn, setActiveBtn] = React.useState(true);
    const [change, setChange] = React.useState(true); //true for mobile 
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null)

    function handleMobileNumChange(e) {
      let regx = /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/
      if(e.target.value.match(regx)){
          setValue(e.target.value)
      }
      else{
          setValue(null)
      }
    }

    function handleEmailChange(e) {
      if(e.target.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
          setValue(e.target.value)
      }
      else{
          setValue(null)
      }
    }


    const openDrawer = (open) => {
        setOpen(open);
    }

    const closeDrawer = () => {
        setOpen(false);
    }
 
    const handleChange = (event) => {
        setActiveBtn(event.target.checked);
    }

    const changeLoggin = () => {
        setValue(null);
        setChange(change ? false : true);
    }

  return (  
    <>
    <Grid item>            
      <Typography fontSize={12} fontWeight={600} color={'#626262'} sx={{ml: 1}}>  {/* OPEN SANS */}
          {change === true ? 'Mobile number' : 'Email'}
      </Typography>
      <OutlinedInput 
          sx={{border: '2px solid #F6FAFB', borderRadius: 2, minWidth: '90vw', minHeight: "1vh"}}
          // onChange={(e) => handleChange(e)}
          placeholder={change === true ? "Enter your mobile number" : "Enter your email"}
          inputProps={{
              style: {fontSize: 14, fontWeight: 600, letterSpacing: '0.5%' }
          }}
          color={'primary'}
          startAdornment={
              <InputAdornment position='start'>
                  {change === true ? <CallOutlined sx={{color: COLOR.PRIMARY_COLOR1}} /> : <EmailOutlined sx={{color: COLOR.PRIMARY_COLOR1}} />}
                </InputAdornment>
          }
          type={change === true ? 'number' : 'text'}
          // value={value}
          onChange={change === true ? handleMobileNumChange : handleEmailChange}
      />
  
      <Button
          variant='contained' 
          sx={{minWidth: '90vw', alignItems:"center", my: 2, minHeight: "6vh", background: '#036463', color: '#ffffff' , borderRadius: 2 }}
          disableElevation
          disabled={value ? false : true}
          onClick={() => openDrawer(true)}
      >
          Login
      </Button>
      <Stack direction="row" spacing={1} alignItems="center">
          <AntSwitch checked={activeBtn} inputProps={{ 'aria-label': 'ant design'}}  onClick={handleChange}  />
  
          <Typography fontSize={10} fontWeight={600} color={'#626262'} sx={{ml: 1}}>  {/* OPEN SANS */}
              I agree to <span style={{color: COLOR.PRIMARY_COLOR2}}> Terms & Conditions </span> and <span style={{color: COLOR.PRIMARY_COLOR2}}>Privacy Policy.</span>
          </Typography>
      </Stack>
  
          <Divider color={COLOR.PRIMARY_COLOR1} sx={{mt: 5}} >  <Typography  fontSize={12} fontWeight={600} color={COLOR.PRIMARY_COLOR1} sx={{mx: 3}}> Or login with </Typography> </Divider>
          
          <Button
              variant='contained' 
              sx={{minWidth: '90vw', alignItems:"center", my: 2, minHeight: "6vh", background: COLOR.BASE_COLOR4, color: COLOR.PRIMARY_COLOR1 , borderRadius: 2,border: `1px solid ${COLOR.BASE_COLOR1}`,  boxShadow: ` 0px 4px 12px rgba(98, 98, 98, 0.06)` }}
              disableElevation
              onClick={() => changeLoggin()}
          >
              {change === true ? <Mail sx={{mr: 1}} /> : <Call sx={{mr: 1}} /> } {change === true ? 'Mail' : 'Mobile number' }
          </Button>
    </Grid>

    {open && <SwipeOTPBox open={openDrawer} close={closeDrawer} input={value ? value : null} /> }
    </>
  )
}

export default LogginSelector