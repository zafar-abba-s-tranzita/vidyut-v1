import AppConstants from "../constants/app-constant";
import axios from "axios";

export function requestLogin(value, identifier) {
    let raw = JSON.stringify({
        "channel": "DCO_APP",
        "identifierType": identifier,
        "identifierValue": value
      });
   return (
    fetch(`${AppConstants.INIT_BY_EMAIL}`, {
      method: "POST",
      mode: "cors",
      headers: {
        "content-type": "application/json",
      },
      body: raw,
    })
   )
  }


export function verifyOTP(otp, value, identifier) {
    var data = JSON.stringify({
      "channel": "DCO_APP",
      "identifierType": identifier,
      "identifierValue": value,
      "otp": otp
    });
    
    var config = {
      method: 'post',
      url: `${AppConstants.VERIFY_OTP}`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    return(
        axios(config)
    )
    
}

// var data = JSON.stringify({
//   "channel": "DCO_APP",
//   "identifierType": props.identifier,
//   "identifierValue": props.input,
//   "otp": otp
// });

// var config = {
//   method: 'post',
//   url: 'https://uat-api.vidyuttech.com/lms/api/v1/auth/verify',
//   headers: { 
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
//   localStorage.setItem("customerInfo", JSON.stringify(response.data))
//   setError(false);
//   setSuccess(true);
// })
// .catch(function (error) {
//   console.log(error.response.data);
//   setError(true);
// });

export function resendOTP(value, identifier){
    let raw = JSON.stringify({
      "channel": "DCO_APP",
      "identifierType": identifier,
      "identifierValue": value
    });
    return (
      fetch(`${AppConstants.INIT_BY_EMAIL}`, {
        method: "POST",
        mode: "cors",
        headers: {
          "content-type": "application/json",
        },
        body: raw,
      })
     )  
}