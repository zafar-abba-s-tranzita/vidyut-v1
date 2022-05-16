import React from 'react'
// import { makeStyles } from '@mui/material/styles'
import VtLogo from "../../../images/VTlogo4 3.png"
import autoEv from "../../../images/apremium-electric-sports-sedan-car-isolated.png"
import '../../../styles/input.css'
import { ChevronRightOutlined, EmailOutlined } from '@mui/icons-material'
import { TextField, IconButton, Button } from '@mui/material'

// const useStyles = makeStyles({
//     flexGrow: {
//       flex: '1',
//     },
//     button: {
//       '&:hover': {
//         backgroundColor: 'red',
//         color: '#3c52b2',
//     },
//   }})

function LoginWithEmail() {
    // const classes = useStyles();

    const [value, setValue] = React.useState("");

    function handleChange(e) {
        setValue(e.target.value);
    }

  return (
    <div>
        <div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 40}}>
                <img src={VtLogo} alt="VT Logo" />
            </div>            
            <div style={{display: 'flex', flexDirection: 'column', marginTop: 30,  alignItems: 'center', marginTop: 90}}>
                <TextField
                    variant="standard" // <== changed this
                    margin="normal"
                    required
                    placeholder='Enter Email ID'
                    InputProps={{
                        startAdornment: (
                        <IconButton>
                            <EmailOutlined style={{color: '#036463', fontSize: 25, fontWeight: 'lighter'}}/>
                        </IconButton>
                            ),
                            disableUnderline: true
                    }}
                    sx={{background: 'rgba(244, 244, 244, 1)', width: '80%', boxSizing: 'border-box', margin: '8px 0', borderRadius: 25, marginRight: 'auto', marginLeft: 'auto', padding: '12px 10px'}}
                />
                <br />

                <Button sx={{
                    backgroundColor: 'rgba(244,244,244,1)',
                    padding: '15px 55px',
                    borderRadius: 25,
                    color: '#036463',
                    marginTop: 4,
                    border: '1px solid #036463'
                }}
                endIcon={<ChevronRightOutlined />}
                // className={classes.button}
                >
                    Send OTP
                </Button>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: 80}}>
                <img src={autoEv} alt={"Auto Ev"} />
            </div>
        </div>
    </div>
    </div>
  )
}

export default LoginWithEmail