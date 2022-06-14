import React, { useCallback } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import VTLogo from '../../../../../images/VTlogo4 3.png'
import Slide from '@mui/material/Slide';
import { Grid, Input, InputAdornment, OutlinedInput, Paper, Typography } from '@mui/material';
import { CloseOutlined, CurrencyRupee } from '@mui/icons-material';
import useRazorpay from "react-razorpay";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {

  const Razorpay = useRazorpay();
  const [value, setValue] = React.useState('')
  const handleChange = async (e) => {
    setValue(e.target.value)
  }
  
  const handlePayment = () => {
    const opt = {
      amount: value*100,
      currency: "INR",
      receipt: "#91",
      name: "VidyutTech",
      key: "rzp_test_uBwzaVYIfyWlm7",
      image: VTLogo,
      theme: {
        color: "#036463",
        hide_topbar: false
      },
    };

    const razorpay = new Razorpay(opt);

    razorpay.on("payment.failed", (res) => {
      // handle fail Payment
      console.log("Payment Failed: ", res);
    });

    razorpay.open();
  };


  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => props.handleClose1()}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
        PaperProps={{
          style: {borderRadius : 25, border: `3px solid #438279`}
        }}
      >
        <Paper sx={{minHeight: '30vh'}}>
          <CloseOutlined 
            sx={{
              color: '#036463',
              fontWeight: 800,
              position: 'absolute',
              top: 11,
              right: 16
            }}
            onClick={() => props.handleClose1()}
          />
          <Grid container justifyContent='center'>
            <Grid item sx={{mt: 5, justifyContent: 'center'}}>
              <Typography sx={{fontSize: 18, fontWeight: 400}}>Enter the amount below</Typography>
            </Grid>
            <Grid item sx={{mt: 2, p: 1, width: '60%', display: 'flex' ,flexDirection: 'column', alignItems: 'center'}}>
                <OutlinedInput 
                  sx={{border: '2px solid #F6FAFB', borderRadius: 2, textAlign: 'center'}}
                  onChange={(e) => handleChange(e)}
                  placeholder="₹0"
                  type="number"
                  inputProps={{
                    'aria-label': 'weight', 
                    style: { textAlign: 'center', fontSize: 21.6, fontWeight: 600 }
                  }}
                  color={!value ? 'primary' : 'success'}
                  startAdornment={
                    <InputAdornment position='start'>
                      {value && <CurrencyRupee />}
                    </InputAdornment>
                  }
                  value={value}
                />
                
                <Typography variant='caption' sx={{mt: 1}}>
                  {!value ? '0 Kms' : `${Math.floor(value/2.71)} Kms`}
                </Typography>

            </Grid>
                <Button
                  variant='contained' 
                  sx={{minWidth: '80%', alignItems:"center", my: 2, height: 45, background: '#036463', color: '#ffffff' , borderRadius: 2 }}
                  disableElevation
                  disabled={value ? false : true}
                  onClick={() => handlePayment()}
                >
                  Recharge
                </Button>
            <Grid item sx={{mt: 1, width: '%'}}>
            </Grid>
          </Grid>
        </Paper>
      </Dialog>
    </div>
  );
}
