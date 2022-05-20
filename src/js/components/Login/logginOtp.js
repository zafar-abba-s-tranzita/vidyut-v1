import React from 'react'
import { makeStyles } from '@mui/styles';
import VtLogo from "../../../images/VTlogo4 3.png"
import autoEv from "../../../images/apremium-electric-sports-sedan-car-isolated.png"
import { Link, useHistory } from 'react-router-dom';
import { Button, Modal, Typography } from '@mui/material';
import { CheckCircleOutline, ChevronRightRounded, Edit } from '@mui/icons-material';
import OtpInput from 'react-otp-input';
import { Box, color } from '@mui/system';
// import firebase from 'firebase';

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
function LogginOTP() {
    const history = useHistory();
    const classes = useStyles();
    const [otp, setOtp] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
        }, 3000);
        onboard()
    }

    const handleClose = () => {
        setOpen(false);
        onboard();
    }
    const onboard = () => {
        setTimeout(() => {
            history.push('/onboarding');
        }, 1200);
    }

    React.useEffect(() => {
      
    });
    
  
  return (
    <div>
    <div>
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <Link to={'/'} className={classes.link}>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 40}}>
            <img src={VtLogo} alt="VT Logo" />
        </div>    
        </Link>
        <div style={{display:'flex', flexDirection: 'column', alignContent: 'center', alignItems:'center', marginTop: 8}}>
            <Typography sx={{
                color: '#000',
                fontSize: 27,
                fontWeight: 500
            }}>
                Otp generated
            </Typography>
            <Typography sx={{
                color: 'grey',
                fontSize: 15,
                fontWeight: 200
            }}>
                Kindly enter the otp received on your mobile
            </Typography>
            <Typography sx={{
                color: '#036463',
                fontSize: 25,
                fontWeight: 300,
                marginTop: 3,
                marginBottom: 2
            }}>
                {'email@xyz.com'} <Edit sx={{
                    color: '#808080',
                    fontSize: 18,
                    fontWeight: 300,
                }}
                onClick={() => history.push('/emailLogged') }
                />
            </Typography>
        </div> 
        <div style={{display:'flex', flexDirection: 'column', alignContent: 'center', alignItems:'center'}}>
            <OtpInput 
            onChange={(e) => setOtp(e)}
            numInputs={4}
            separator={<span> &nbsp; </span>}
            focusStyle={{
                //border: 'none'
            }}
            errorStyle={{
                border: '2px solid #f23'
            }}
            isInputNum={true}
            inputStyle={{
                width: "50px",
                height: "3.2rem",
                margin: "0 1rem",
                fontSize: "2rem",
                borderRadius: 12,
                border: "1px solid rgba(0,0,0,0.8)",
                backgroundColor: "rgba(244,244,244,1)", //03646377
                marginTop: 10
              }}
            value={otp}
            />
            <Typography sx={{
                position: 'absolute',
                left: 25,
                marginTop: 11,
                color: '#000',
                fontSize: 12,
                fontWeight: 300
            }}
            onClick={() => window.confirm('RESEND OTP!!!')}
            >
                Resend OTP
            </Typography>
            <Button sx={{
                    backgroundColor: otp.length != 4 ? 'rgba(244,244,244,1)' : '#036463',
                    padding: '15px 55px',
                    borderRadius: 25,                    
                    color: otp.length == 4 ? 'rgba(244,244,244,1)' : '#036463',
                    marginTop: 14,
                    border: '1px solid #036463'
                }}
                endIcon={<ChevronRightRounded />}
                disabled={otp.length === 4 ? false : true}
                onClick={handleOpen}
                >
                    Verify
            </Button>
            
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            disableAutoFocus={true}
            sx={{outline: 0}}
            >
                <Box sx={{
                    backgroundColor: '#E9F8EB',
                    width: '70vw',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    transform: 'translate(0%,100%)',
                    borderRadius: 25,
                }}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                    <CheckCircleOutline sx={{color: '#4ac99b'}} /> 
                    <Typography>
                        {otp} - OTP Verified Successfully
                    </Typography>
                    </div>
                </Box>
            </Modal>

        </div>       
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: 520, position: 'fixed'}}>
            <img src={autoEv} alt={"Auto Ev"} />
        </div>
    </div>
</div>
</div>
  )
}

export default LogginOTP