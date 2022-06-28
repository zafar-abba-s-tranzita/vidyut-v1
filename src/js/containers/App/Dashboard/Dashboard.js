import React from 'react'
import { useLocation } from 'react-router-dom'
import AppBar from "../../../components/AppBar/AppBar"
import { Container, Grid, Typography, Card, CardContent, Button, Divider, Stack } from '@mui/material';
import { borderRadius, Box } from '@mui/system';
import SmallAuto from "../../../../images/AutoRckshawSmall.svg"
import { ArrowBackRounded, ArrowLeftRounded, ArrowRightAltOutlined, ArrowRightAltRounded, ArrowRightRounded, InfoOutlined } from '@mui/icons-material';
import UserBox from './components/UserBox';
import PathVector from "../../../../images/path-vector.svg";
import KMLeft from "../../../../images/KMLeft2.svg";
import KMError from "../../../../images/KMLeftError.svg";
import { COLOR } from "../../../../styles/Color";
import VTLogo from '../../../../images/VTlogo4 3.png'

import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Skeleton from "@mui/material/Skeleton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { ModalUnstyled } from '@mui/base';
import clsx from 'clsx'
import { Fade } from '@mui/material';
import AlertDialogSlide from './components/SwipeDialog';
import useRazorpay from 'react-razorpay';
import SwipePrev from './components/Payment';

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: COLOR.BASE_COLOR1
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)"
}));

function Dashboard() {
    const Razorpay = useRazorpay();
    const location = useLocation();
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(1);
    const [activeId, setActiveId] = React.useState();
    const [open1, setOpen1] = React.useState(false);
    const handleOpen = () => setOpen1(true);
    const handleClose = () => setOpen1(false);

    const [openPrevious, setOpenPrevious] = React.useState(false);

    const togglePrevDrawer = (prev) => () => {
      setOpenPrevious(prev);
      // console.log(prev)
    };

    const closePrevDrawer = () => {
      setOpenPrevious(false);
    }

    const [openDialog, setOpenDialog] = React.useState(false);

    const handleDialogOpen = () => {
      setOpenDialog(true);
    };
  
    const handleDialogClose = () => {
      setOpenDialog(false);
    };

    const rates = [
      { id: 1, km: 110, rate: 500 },
      { id: 2, km: 110, rate: 500 },
      { id: 3, km: 110, rate: 500 },
      { id: 4, km: 110, rate: 500 }
    ];

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    const toggleValue = async (val) => {
      setValue(val => val+1);
    };

    const handlePayment = async () => {
      if(activeId === 4) {
        handleDialogOpen()
      }
      else{
        const opt = {
          id: "order_HlYVQUC4lTYot9",
          amount: 500*100,
          currency: "INR",
          receipt: "#91",
          name: "VidyutTech",
          key: "rzp_test_uBwzaVYIfyWlm7",
          image: VTLogo,
          theme: {
            color: "#036463",
          },
        };
    
        const razorpay = new Razorpay(opt);
    
        razorpay.on("payment.failed", (res) => {
          // handle fail Payment
          console.log("Payment Failed: ", res);
        });
    
        razorpay.open();
      }
      //handle's razorpay here..
    }
    
  return (
    <div style={{background: COLOR.BASE_COLOR4 , height: '100vh' }}>
    <Grid container style={{height: '45vh'}}>
    <AppBar />
            <Grid container item xs={12} alignItems="center" justifyContent="center">
                <UserBox />
            </Grid>
    </Grid>
    
    {!open && <Container sx={{background: COLOR.BASE_COLOR2 , height: '55vh', borderTopLeftRadius: 25, borderTopRightRadius: 25}}>

      <Grid container item justifyContent="flex-end" sx={{background: 'unset'}}>
        <Grid item 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          padding: '20px 15px',
        }}
        onClick={togglePrevDrawer(true)}
        >
          <Typography>
            View recharge history
          </Typography>
          <ArrowRightAltRounded  sx={{color: COLOR.PRIMARY_COLOR1 }} />
        </Grid>
      </Grid>

          <Grid container sx={{justifyContent: 'space-around', alignItems: 'stretch'}} alignItems="stretch">
            
          <Grid item xs={4}>
              <Card sx={{borderRadius: 5, textAlign: 'center', boxShadow: '0px 4px 34px 3px rgba(0, 0, 0, 0.04)', border: '1px solid #EDEDED'}}>
              <CardContent >
              <Grid
                container
                style={{ justifyContent: 'center'}}
              >
              <Grid item>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  fontSize={12}
                  fontWeight={700}
                  sx={{wordWrap: 'break-word', letterSpacing: 1.22}}
                >
                  Monthly utilisation
                </Typography>
              
              </Grid>
              <Grid item>
              <Typography color={"#141414"} fontSize={24} fontWeight={700} >900</Typography>
              <Typography color={"#141414"} fontSize={10} fontWeight={600}>Kms</Typography>
              </Grid>
            </Grid>
              </CardContent>
              </Card>
          </Grid>

          <Grid item xs={7} style={{display: 'flex'}}>
          <Card sx={{borderRadius: 5, textAlign: 'center', boxShadow: '0px 4px 34px 3px rgba(0, 0, 0, 0.04)', border: '1px solid #EDEDED', display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
          <CardContent >
          <Grid
            container
            style={{ justifyContent: 'center'}}
          >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              fontSize={12}
              fontWeight={700}
              sx={{wordWrap: 'break-word', letterSpacing: 1.22, textAlign: 'left'}}
            >
              Utilisation till date
            </Typography>
            
          </Grid>

          <Grid container sx={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-end'}}>
          <Grid item marginTop={2}>
          <Typography color={"#141414"} fontSize={20} fontWeight={600} >10,000</Typography>
          <Typography color={"#141414"} fontSize={10} fontWeight={600}>Kms</Typography>
          </Grid>

          <Grid item>
            <img src={PathVector} />
          </Grid>
          </Grid>
          </Grid>
          </CardContent>
          </Card>
          </Grid>

          </Grid>

          <Grid container sx={{justifyContent: 'space-around', alignItems: 'stretch', mt: 2}} alignItems="stretch">
            
          <Grid item xs={12}>
          <Card sx={{borderRadius: 5, textAlign: 'center', boxShadow: '0px 4px 34px 3px rgba(0, 0, 0, 0.04)', border: '1px solid #EDEDED'}}>
          <CardContent >
            <Grid container flexWrap={'nowrap'}>
            <Grid
            container
            style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'flex-start'}}
          >
          <Grid item>
          <Stack direction="row" spacing={1} alignItems="flex-start">
            <Typography
                color="textSecondary"
                gutterBottom
                fontSize={12}
                fontWeight={700}
                sx={{wordWrap: 'break-word', letterSpacing: 1.22, textAlign: 'left'}}
              >
                Remaining Kms 
            </Typography>
            <InfoOutlined sx={{color: COLOR.TYPO_BASE6, fontSize: 15}} />
          </Stack>
            
          </Grid>

          <Grid item>

          <Typography color={"#141414"} fontSize={43} fontWeight={600} >1,000</Typography>
          <Typography color={"#141414"} fontSize={14} fontWeight={600}>Kms</Typography>
            
          </Grid>
          </Grid>

          <Grid item>
            <img src={KMLeft} alt="" />
            {/* <img src={KMError} alt="" /> */}
          </Grid>
            </Grid>
          </CardContent>
          </Card>
          </Grid>

          </Grid>

          <Grid container sx={{mt: 2}}>
            <Grid item xs={12}>
              <Button variant="contained" sx={{minWidth: '92vw', minHeight: '48px', color: '#fff', background:'#036463' , borderRadius: 2}}  
                  onClick={toggleDrawer(true)}
              >
              Recharge now
              </Button>

            </Grid>
          </Grid>

    </Container>}

    {open && <Root>
    <CssBaseline />
    <Global
      styles={{
        ".MuiDrawer-root > .MuiPaper-root": {
          height: `calc(55% - ${drawerBleeding}px)`,
          overflow: "visible",

        }
      }}
    />
      <SwipeableDrawer
        anchor="bottom"
        open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true
          }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            visibility: "visible",
            right: 0,
            left: 0
          }}
        >
          {/* <Puller /> */}
          <div style={{display:'flex', alignItems: 'center', marginLeft: 15}} onClick={toggleDrawer(false)}>
          <ArrowBackRounded sx={{color: COLOR.PRIMARY_COLOR1}} />
          <Typography sx={{ p: 2, color: "text.primary", fontWeight: 600 }}>
             Go back 
          </Typography>
          </div>
          
        </StyledBox>


        <StyledBox
          sx={{
            px: 4,
            pb: 2,
            pt: 2,
            height: "100%",
            overflow: "auto"
          }}
        >
          
          <Grid item xs={12}>
          <Card sx={{borderRadius: 5, textAlign: 'center', boxShadow: '0px 4px 34px 3px rgba(0, 0, 0, 0.04)', border: '1px solid #EDEDED'}}>
          <CardContent >
          <Grid container flexWrap={'nowrap'}>
          <Grid
          container
          style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'flex-start'}}
          >
          <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            fontSize={14}
            fontWeight={700}
            sx={{wordWrap: 'break-word', letterSpacing: 1.1, textAlign: 'left'}}
          >
            Remaining Kms
          </Typography>

          </Grid>

          <Grid item>

          <Typography color={"#141414"} fontSize={43} fontWeight={600} >1,000</Typography>
          <Typography color={"#141414"} fontSize={14} fontWeight={600}>Kms</Typography>

          </Grid>
          </Grid>

          <Grid item>
          <img src={KMLeft} />
          </Grid>
          </Grid>

          <Divider 
            sx={{
              p: 1,
              borderBottomWidth: 'medium'
            }}
          />


            <Grid container sx={{pt: 2}} justifyContent="space-between" gap={2}>
            {rates.map((ele, index) => {
              return(
                <Grid item sx={{
                  border: `2px solid ${COLOR.PRIMARY_COLOR1}`,
                  background: activeId === ele.id ? COLOR.ACCENT_COLORS3 : COLOR.BASE_COLOR4,
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: 'row',
                  width: '47.2%',
                  padding: '10px 10px',
                  justifyContent: index === 3 ? 'center' : 'space-between'
                }}
                key={index}
                onClick={() => setActiveId(ele.id)}
              >
                <Typography sx={{
                  color: activeId === ele.id ? COLOR.BASE_COLOR4 : COLOR.TYPO_BASE4,
                }}>
                    {index === 3 ? 'Other amount' : '110 Kms'}
                </Typography>
                <Typography sx={{
                  color: activeId === ele.id ? COLOR.BASE_COLOR4 : COLOR.PRIMARY_COLOR1,
                  fontWeight: 600
                }}>
                    {index === 3 ? null : '₹500'}

                </Typography>

              </Grid>
              )
            })}
            </Grid>

          </CardContent>
          </Card>
          </Grid>
          
          <Button 
            variant='contained' 
            sx={{minWidth: '100%', alignItems:"center", mt: 2, height: 45, background: COLOR.BRAND_COLOR, color: COLOR.BASE_COLOR4, borderRadius: 2 }}
            disableElevation
            disabled={activeId ? false : true}
            onClick={handlePayment}
          >
         Recharge now
         </Button>
        </StyledBox>
      </SwipeableDrawer>
            </Root>}
    
    {openDialog && <AlertDialogSlide  open={openDialog} handleClose1={handleDialogClose}/>}

    {openPrevious && <SwipePrev open={openPrevious} handlePrevClose={closePrevDrawer} />}
      
    </div>
  )
}   

export default Dashboard