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
import { ArrowBackRounded, CreditCardRounded } from '@mui/icons-material';
import { COLOR } from '../../../../../styles/Color';
import { Grid } from '@mui/material';

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

function SwipePrev(props) {

    const rates = [
        { id: 1, text: 'Usage till date', rate: 10000 },
        { id: 2, text: 'Monthly usage', rate: props.kmsThisMonth }
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
            height: `calc(90% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <SwipeableDrawer
        anchor="bottom"
        open={props.open}
        onClose={props.handlePrevClose}
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
            top: -drawerBleeding,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            visibility: 'visible',
            right: 0,
            left: 0,
            background: COLOR.BASE_COLOR1
          }}
        >
          {/* <Puller /> */}
          <div style={{display:'flex', alignItems: 'center', marginLeft: 15}}>
            <ArrowBackRounded sx={{color: COLOR.PRIMARY_COLOR1}} onClick={props.handlePrevClose} />
                <Typography sx={{ p: 2, mx: '20%' , color: COLOR.TYPO_BASE4 , fontWeight: 600 }}>
                     Previous recharges 
                </Typography>
          </div>

        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
            background: COLOR.BASE_COLOR1
          }}
        >
          <Grid container sx={{pt: 2}} justifyContent="space-between" gap={2}>
            {rates.map((ele, index) => {
              return(
                <Grid item sx={{
                  border: `2px solid #D1E4E4`,
                  background: COLOR.BASE_COLOR4,
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  width: '47.2%',
                  padding: '10px 10px',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                key={index}
                // onClick={() => setActiveId(ele.id)}
              >
                <Typography sx={{
                  color: COLOR.TYPO_BASE7,
                  fontSize: 14,
                  fontWeight: 200
                }}>
                    {ele ? ele.text : ''}
                </Typography>
                <Typography sx={{
                  fontWeight: 500,
                  mt: 1,
                  color: COLOR.TYPO_BASE4
                }}>
                    {ele ? ele.rate.toLocaleString() : ''} KMS
                </Typography>

              </Grid>
              )
            })}
           
           {props.data.rechargeList.map((elem, i) => {
               return (
                <Grid container sx={{width: '100%', background: COLOR.BASE_COLOR4, borderRadius: 2, flexDirection: 'row', justifyContent: 'space-around'}} key={i}>
                <Grid container xs={5} sx={{flexDirection: 'column', p: 1}}>
                <Grid container sx={{alignItems: 'stretch'}}>
                    <Grid item>
                         <CreditCardRounded sx={{color: COLOR.PRIMARY_COLOR2}}/> 
                    </Grid>
                    <Grid item sx={{ml: 1}}>
                        <Typography sx={{fontWeight: 700}}>
                            {elem.status === 'OK' ? "Credited" : "Failed"}
                        </Typography>
                    </Grid>
                    </Grid>
                    <Grid item sx={{fontWeight: 500, color: COLOR.TYPO_BASE4, fontSize: 12 }}>
                        {elem.dateTime}
                    </Grid>
                </Grid>
                <Grid container xs={6} sx={{flexDirection: 'column', p: 1, alignItems: 'flex-end', justifyContent: 'space-between'}}>
                    <Grid item sx={{fontWeight: 600, color: COLOR.PRIMARY_COLOR1, fontSize: 16 }}>
                        ₹ {elem.amount}
                    </Grid>
                    <Grid item sx={{fontWeight: 500, color: COLOR.TYPO_BASE4, fontSize: 12 }}>
                        {elem.kmsCredited} Kms
                    </Grid>
                </Grid>
                </Grid>
               )
           })}

          </Grid>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}


export default SwipePrev;
