import AppConstants from "../constants/app-constant";
import axios from "axios";

export function requestEmailLogin(value, identifier) {
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
      "identifierValue": "9456201516",
      "otp": "3418"
    });
    
    var config = {
      method: 'post',
      url: `${AppConstants.VERIFY_OTP}`,
      headers: { 
        'Access-Control-Request-Headers': '*', 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    return(
        axios(config)
    )
    
}