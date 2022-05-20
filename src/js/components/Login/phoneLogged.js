import React from 'react'
import { makeStyles } from '@mui/styles';
import VtLogo from "../../../images/VTlogo4 3.png"
import autoEv from "../../../images/apremium-electric-sports-sedan-car-isolated.png"
import '../../../styles/input.css'
import { Call, ChevronRightOutlined, EmailOutlined } from '@mui/icons-material'
import { TextField, IconButton, Button } from '@mui/material'
import { Link, useHistory } from 'react-router-dom'
import Login from './login';
// import {firebase, auth} from '../../../firebase'

const useStyles = makeStyles({
    button: {
      '&:active': {
        backgroundColor: '#036463',
        color: '#fff',
    }},
    link: {
        textDecoration: 'none'
    }
})

function LogginWithPhone() {
    const history = useHistory();
    const classes = useStyles();

    const [value, setValue] = React.useState(null);
    // const [email, setEmail] = React.useState(null);

    function handleChange(e) {
        let regx = /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/
        if(e.target.value.match(regx)){
            setValue(e.target.value)
        }
        else{
            setValue(null)
        }
    }

    function sendOtp(e) {
        console.log('send OTP to Phone->', value);

        history.push('/otp');
    }

  return (
    <div>
        <div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Link to={'/'} className={classes.link}>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 40}}>
                <img src={VtLogo} alt="VT Logo" />
            </div>    
            </Link>           
            <div style={{display: 'flex', flexDirection: 'column', marginTop: 30,  alignItems: 'center', marginTop: 90}}>
                <TextField
                    variant="standard" 
                    margin="normal"
                    required
                    placeholder='Enter Phone Number'
                    type={'number'}
                    InputProps={{
                        startAdornment: (
                        <IconButton>
                            <Call style={{color: '#036463', fontSize: 25, fontWeight: 'lighter'}}/>
                        </IconButton>
                            ),
                            disableUnderline: true
                    }}
                    sx={{background: 'rgba(244, 244, 244, 1)', width: '80%', boxSizing: 'border-box', margin: '8px 0', borderRadius: 25, marginRight: 'auto', marginLeft: 'auto', padding: '12px 10px'}}
                    onChange={handleChange}
                />
                <br />

                {value && <Button sx={{
                    backgroundColor: 'rgba(244,244,244,1)',
                    padding: '15px 55px',
                    borderRadius: 25,

                    
                    color: '#036463',
                    marginTop: 4,
                    border: '1px solid #036463'
                }}
                endIcon={<ChevronRightOutlined />}
                className={classes.button}
                onClick={(e) => sendOtp(e)}
                >
                    Send OTP
                </Button>}
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: 580, position: 'fixed'}}>
                <img src={autoEv} alt={"Auto Ev"} />
            </div>
        </div>
    </div>
    </div>
  )
}

export default LogginWithPhone