import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CircularProgress, Typography, Box, Button } from '@mui/material'
import { circularProgressClasses } from '@mui/material/CircularProgress';
import MobileStepper from '@mui/material/MobileStepper';
import { ChevronRight, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import Logo from '../../../assets/images/onboarding-svg/logo.svg'
import IphoneMockup1 from '../../../assets/images/onboarding-svg/figma-export-first.png'
import IphoneMockup2 from '../../../assets/images/onboarding-svg/figma-export.png'
import IphoneMockup3 from '../../../assets/images/onboarding-svg/figma-export-2.png'
import IphoneMockup4 from '../../../assets/images/onboarding-svg/iphone-mockup-4.svg'
import ScreenFourLongText from './typo';
import { useHistory } from 'react-router-dom';
import Div1 from '../../../assets/images/onboarding-svg/Shape 1.svg'
import Div2 from '../../../assets/images/onboarding-svg/Shape 2.svg'
import Div3 from '../../../assets/images/onboarding-svg/Shape 3.svg'
import Div4 from '../../../assets/images/onboarding-svg/Shape 4.svg'
import { COLOR } from '../../../../styles/Color'



const theme = createTheme({
    components: {
      MuiMobileStepper: {
        styleOverrides: {
          root: {
            backgroundColor: 'red'
          },
          dot:{
              backgroundColor: COLOR.PRIMARY_COLOR1,
              opacity: 0.2,
          },
          dotActive:{
              backgroundColor: COLOR.PRIMARY_COLOR1,
              opacity: 1,
              width: '12px',
              borderRadius: 4
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


    const handleNext = () => {
        setCounter(prevActiveStep => prevActiveStep + 1);
        if(counter == 4){
            history.push('/');
            setCounter(0)
        }
        onboarding(counter);

      };
    
      const handleBack = () => {
        setCounter((prevActiveStep) => prevActiveStep - 1);
        onboarding(counter);

      };

    // const h = () => {
    //     setCounter(count => count + 1);
        
    //     onboarding(counter);
    //   };
    // const decrease = () => {
    //     setCounter(counter => counter - 1);
    //     onboarding(counter);
    //   };
    
    //   console.log(counter)

    const onboarding = (xyz) => {
        setVal(json.find((e) => e.id === xyz))
    }
    React.useEffect(() => {
      handleNext();
    }, [setVal])
    
    const json = [
        {
            id: 0,
            title: 'Thank you for choosing us!',
            long_text : 'We are delighted to get you onboarded!',
            value: 1,
            val: 25,
            width: '',
            img: IphoneMockup1,
            div: Div1
        },
        {
            id: 1,
            title: 'Pay Per KMs',
            long_text : 'Below is the tariff plan for your vehicle.',
            value: 2,
            width: '200%',
            val: 50,
            img: IphoneMockup2,
            div: Div2
        },
        {
            id: 2,
            title: 'Drive More Pay Less',
            long_text : 'The tariff shall change according to your usage.',
            value: 3,
            width: '175%',
            val: 75,
            img: IphoneMockup3,
            div: Div3
        },
        {
            id: 3,
            title: 'One Powerful Dashboard',
            long_text : <ScreenFourLongText />,
            width: '',
            value: 4,
            val: 100,
            img: IphoneMockup4,
            div: Div4
        }
    ]
    // const maxSteps = json.length;

  return (
      <div style={{background: '#fff', height: '100vh', position: 'absolute', width: '100vw', zIndex: 1}}>
        <img src={val.div} style={{ position: 'absolute', width: '100vw', zIndex: -1 }} />
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 27}}>
            <img src={Logo} width={50}/>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: 100}}>
            <Typography sx={{fontSize: 34, fontWeight: 600, color: '#414646', textAlign: 'center', font: 'Montserrat'}}>
                {val ? val.title : null}
            </Typography>

            <Typography sx={{fontSize: 14, fontWeight: 600, color: '#414646', textAlign: 'center' , font: 'Montserrat', marginTop: 5}} component={'span'} variant={'body2'}>
                {val ? val.long_text : null}
            </Typography>
        </div>

        <div style={{display: 'grid', marginTop: 2, gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', gridColumnGap: '17%'}}>
        <ThemeProvider theme={theme}>
        <MobileStepper
            variant="dots"
            steps={4}
            position="static"
            activeStep={counter-1}
            sx={{ maxWidth: '20%', flexGrow: 1, background: 'unset', textAlign: 'center', gridArea: '2/2/3/3'}}
            nextButton={
                <Button
                  size="small"
                  onClick={() => handleNext()}
                  disabled={counter === 5}
                >
                    <KeyboardArrowRight 
                    sx={{color: COLOR.PRIMARY_COLOR1, fontWeight: 800}}
                    />

                </Button>
              }
              backButton={
                <Button size="small" 
                    onClick={() => handleBack()} 
                    disabled={counter === 1}
                >
                        <KeyboardArrowLeft 
                        sx={{color: COLOR.PRIMARY_COLOR1, fontWeight: 800}}
                    />

                  
                </Button>
              }
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

        {/* <Box sx={{ position: 'relative', display: 'inline-flex', marginLeft: 24, gridArea: '2/2/3/4'}} onClick={() => increase()}>
                <CircularProgress
                    variant="determinate"
                    sx={{
                    color: '#ffffff35',
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
                /> */}
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
                    {/* <ChevronRight sx={{
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
                    }} />    */}
                {/* </Box> */}
        {/* </Box> */}
        </div>
        <div>
            <Box sx={{display: 'flex', justifyContent: 'center', position: 'absolute', bottom: 0, left: '25vw', right: '25vw'}}>
                <img src={val ? val.img : null} alt={'IPHONE MOCK'} width={val ? val.width : null}/>
            </Box>
        </div>
    </div>
  )
}

export default StepOne