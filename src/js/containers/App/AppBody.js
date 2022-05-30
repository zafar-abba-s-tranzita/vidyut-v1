import React from 'react'
import {Grid, Input, Typography, FormControl, OutlinedInput, InputAdornment, Button} from "@mui/material"
import AppBar from "../../components/AppBar/AppBar"
import AutoRickshaw from "../../../images/AutoRickshaw.svg"


function AppBody() {
  const [values, setValues] = React.useState({
    placeholder : "KA 00 AB 0000"
  });

  const [cardNumber, setCardNumber] = React.useState([]);

  const [flag, setFlag] = React.useState(false);

  const handleClick = async (val) => {
    let regex = /[A-Z]{2} [0-9]{2} [A-Z]{2} [0-9]{4}/
    if(val.match(regex)){
      setFlag(true);
    }
    else{
      setFlag(false);
    }
    console.log(flag)
  };

  const handleChange = async (event) => {
    const value = event.target.value.toUpperCase();
    // value = value.toupper();
    handleClick(value);
    if ([2, 5, 8].includes(value.length)) {
      setCardNumber((prev) => {
        // this is only the case when we try to delete empty space
        if (prev.endsWith(" ")) {
          return value.slice(0, -1);
        } else {
          return value + " ";
        }
      });
    } else {
      setCardNumber(value);
    }
  };

  // const minValue = (min) => (value) =>
  // isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;

  // const composeValidators = (...validators) => (value) =>
  // validators.reduce((error, validator) => error || validator(value), undefined);


//   const handleChange = e => {
//     const inputVal = e.target.value.replace(/ /g, ""); 
//     if (inputVal.length > 10) {
//         inputVal = inputVal.substr(0, 10);
//       }
      
//       // Get nd array of 4 digits per an element EX:  ["4242", "4242", ...]
//       const splits = inputVal.match(/.{1,2}/g);

//     let spacedNumber = "";
//     if (splits) {
//         spacedNumber = splits.join(" "); // Join all the splits with an empty space
//         if(splits.length > 4){
//           spacedNumber = splits.join("")
//         } 
//     }
//     console.log(splits)
//     setCardNumber(spacedNumber); // Set the new CC number
//     console.log(spacedNumber);
// };

//   React.useEffect(()=>{
//     if(cardNumber.length===2){
//       setCardNumber(cardNumber+" ")
//     }
//     else if (cardNumber.length === 5) {
//         setCardNumber(cardNumber+" ")
//     } else if (cardNumber.length === 8) {
//         setCardNumber(cardNumber+" ")
//     }
// }, [cardNumber]);

  return (
   <>
    <AppBar />
    <Grid container>
    <Grid  
      item 
      xs={12} 
      sx={{display: 'flex', alignItems: 'center', mt: 6, alignContent: 'space-between', flexDirection: 'column'}} >
      <img src={AutoRickshaw} alt='Auto Rickshaw' />

      <Typography sx={{mt: 10, mb: 2}}>
      Enter your vehicle number below
      </Typography>

      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            value={cardNumber}
            onChange={(e) => handleChange(e)}
            placeholder={values.placeholder}
            aria-describedby="outlined-weight-helper-text"
            sx={{borderRadius: 3}}
            inputProps={{
              'aria-label': 'weight', 
              style: { textAlign: 'center', fontSize: 21.6, fontWeight: 600 },
              maxLength: 13
            }}
            type="text"
          />
      </FormControl>
          <Grid sx={{mt: 27}}></Grid>
      <Button 
        disableElevation
        variant="contained"
        disabled = {!flag ? true : false}
        sx={{minWidth: '80vw', minHeight: '48px', color: '#fff', background:'#036463' , borderRadius: 2}} 
        disableFocusRipple
      >
        Submit
      </Button>
      
      
    </Grid>
    </Grid>
   </>
  )
}

export default AppBody