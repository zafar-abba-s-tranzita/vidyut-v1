import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CircularProgress, Typography, Box, Button } from '@mui/material'
import { circularProgressClasses } from '@mui/material/CircularProgress';
import MobileStepper from '@mui/material/MobileStepper';
import { ChevronRight } from '@mui/icons-material';
import IphoneMockup1 from '../../../../images/phone_11.png'
import IphoneMockup2 from '../../../../images/phone_12.png'
import IphoneMockup3 from '../../../../images/phone_13.png'
import IphoneMockup4 from '../../../../images/phone_14.png'
import ScreenFourLongText from './typo';
import { useHistory } from 'react-router-dom';



const theme = createTheme({
    components: {
      MuiMobileStepper: {
        styleOverrides: {
          root: {
            backgroundColor: 'red'
          },
          dot:{
              backgroundColor: '#fff'
          },
          dotActive:{
              backgroundColor: '#6979F8'
          }
        },
      },
      MuiCircularProgress: {
        styleOverrides:{
            svg:{
                color: '#fff',
            }
        }
      }
    },
  });

function StepOne() {
    const history = useHistory();
    const [val, setVal] = React.useState(0);
    const [counter, setCounter] = React.useState(0);
    const increase = () => {
        setCounter(count => count + 1);
        if(counter == 4){
            // history.push('/');
            // setCounter(0)
        }
        onboarding(counter);
      };
    
    const onboarding = (xyz) => {
        setVal(json.find((e) => e.id === 3))
    }
    React.useEffect(() => {
      increase()
    }, [setVal])
    
    const json = [
        {
            id: 0,
            title: 'Thank you for choosing us!',
            long_text : 'We are delighted to get you onboarded!',
            value: 1,
            val: 25,
            img: IphoneMockup1
        },
        {
            id: 1,
            title: 'Pay Per KMs',
            long_text : 'Below is the tariff plan for your vehicle.',
            value: 2,
            val: 50,
            img: IphoneMockup2
        },
        {
            id: 2,
            title: 'Drive More Pay Less',
            long_text : 'The tariff shall change according to your usage.',
            value: 3,
            val: 75,
            img: IphoneMockup3
        },
        {
            id: 3,
            title: 'One Powerful Dashboard',
            long_text : <ScreenFourLongText />,
            value: 4,
            val: 100,
            img: IphoneMockup4
        }
    ]

  return (
    <div style={{background: '#036463', height: '100vh', position: 'absolute', width: '100vw'}}>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: 127}}>
            <Typography sx={{fontSize: 34, fontWeight: 600, color: '#fff', textAlign: 'center', font: 'Montserrat'}}>
                {val ? val.title : null}
            </Typography>

            <Typography sx={{fontSize: 14, fontWeight: 400, color: '#fff', textAlign: 'center' , font: 'Montserrat'}} component={'span'} variant={'body2'}>
                {val ? val.long_text : null}
            </Typography>
        </div>

        <div style={{display: 'grid', marginTop: 15, gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', gridColumnGap: '17%'}}>
        <ThemeProvider theme={theme}>
        <MobileStepper
            variant="dots"
            steps={4}
            position="static"
            activeStep={counter-1}
            sx={{ maxWidth: '20%', flexGrow: 1, background: 'unset', textAlign: 'center', gridArea: '2/2/3/3'}}
        />
        </ThemeProvider>
        {/* <Box sx={{ position: 'relative', display: 'inline-flex', marginLeft: 24, gridArea: '2/2/3/4'}} onClick={() => increase()} >
            <ThemeProvider theme={theme}><CircularProgress variant="determinate" size={40} thickness={3} value={counter*25} sx={{ color: '#fff', fontWeight: 200, [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',}}}/></ThemeProvider>
            <Box
                sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}
            >
               <ChevronRight sx={{fontSize: 30, color: '#fff'}} />   
            </Box>
        </Box> */}

        <Box sx={{ position: 'relative', display: 'inline-flex', marginLeft: 24, gridArea: '2/2/3/4'}} onClick={() => increase()}>
                <CircularProgress
                    variant="determinate"
                    sx={{
                    color: '#ffffff35'
                    }}
                    size={40}
                    thickness={4}
                    value={100}
                />
                <CircularProgress
                    variant="determinate"
                    sx={{
                    color: '#fff',
                    animationDuration: '550ms',
                    position: 'absolute',
                    left: 0,
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round',
                    },
                    }}
                    size={40}
                    thickness={5}
                    value={counter*25}
                    // {...props}
                />
                {/* <Box
                    sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}
                > */}
                    <ChevronRight sx={{
                    fontSize: 30, 
                    color: '#fff', 
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    transform: 'translate(15%, 15%)'
                    }} />   
                {/* </Box> */}
            </Box>
        </div>
        <div>
            <Box sx={{display: 'flex', justifyContent: 'center', position: 'absolute', bottom: 0, left: '25vw', right: '25vw'}}>
                <img src={val ? val.img : null} alt={'IPHONE MOCK'} />
            </Box>
        </div>
    </div>
  )
}

export default StepOne