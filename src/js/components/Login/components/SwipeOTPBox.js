import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { ArrowBackRounded, CloseOutlined, CreditCardRounded, EditOutlined } from '@mui/icons-material';
import { COLOR } from '../../../../styles/Color';
import { Grid, Stack } from '@mui/material';
import OtpInput from 'react-otp-input';


const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 40,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function SwipeOTPBox(props) {
    const [otp, setOtp] = React.useState([]);
    const rates = [
        { id: 1, text: 'Usage till date', rate: 10000 },
        { id: 2, text: 'Monthly usage', rate: 1500 }
      ];

    const histroy = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
    ];

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(055% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <SwipeableDrawer
        anchor="bottom"
        open={props.open}
        onClose={props.close}
        onOpen={props.open}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -23,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            visibility: 'visible',
            right: 0,
            left: 0,
            background: COLOR.BASE_COLOR4,
            // display: 'none'
          }}
        >
          {/* <Puller /> */}
          <div style={{display:'flex', alignItems: 'center', marginLeft: 15, justifyContent:'flex-end', padding: '10px 15px'}}>
            <CloseOutlined sx={{color: COLOR.PRIMARY_COLOR1}} onClick={props.close} />
          </div>

        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
            background: COLOR.BASE_COLOR4,
          }}
        >
          <Grid container sx={{pt: 2}} justifyContent="center" gap={2}>
            <Grid item alignItems={'center'} textAlign={'center'}>
                <Typography fontSize={20} fontWeight={600} letterSpacing={'1.5%'}>
                    Otp generated
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center" marginTop={1}>
                    <Typography fontSize={12} fontWeight={400}>
                        Otp has been sent to <b> { `+91-8899889988` } </b> 
                    </Typography>
                    <EditOutlined sx={{color : COLOR.PRIMARY_COLOR1, fontSize: 15}} />
                </Stack>
            </Grid>
            <Grid item alignItems={'center'}>
            
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
                height: "50px",
                margin: "0 5px",
                fontSize: "2rem",
                borderRadius: 12,
                border: "1px solid rgba(0,0,0,0.3)",
                backgroundColor: "#fff", //03646377
                marginTop: 20
              }}
            value={otp}
            />
            <Typography fontSize={12} fontWeight={400} letterSpacing={'1.5%'} sx={{mt: 2, ml: 1, color: COLOR.TYPO_BASE3}} onClick={() => window.confirm("RESEND OTP!!!")}>
                Resend otp
            </Typography>
            </Grid>
            <Grid item alignItems={'center'} sx={{position: 'absolute', bottom: 1}}>
            <Button
                variant='contained' 
                sx={{minWidth: '90vw', alignItems:"center", my: 5, minHeight: "6vh", background: COLOR.PRIMARY_COLOR1, color: COLOR.BASE_COLOR4 , borderRadius: 2,border: `1px solid ${COLOR.BASE_COLOR1}`,  boxShadow: ` 0px 4px 12px rgba(98, 98, 98, 0.06)` }}
                disableElevation
                disabled={otp.length === 4 ? false : true}
                // onClick={() => changeLoggin()}
            >
                Verify number
            </Button>
            </Grid>
          </Grid>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}


export default SwipeOTPBox;
