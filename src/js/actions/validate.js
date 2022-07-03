import axios from "axios";

export function verifyAuthToken (customerId, authToken) {
    let body =  JSON.stringify({
        "authToken" : authToken,
        "customerId": customerId
    })
    let config = {
        method: 'post',
        url: `https://uat-api.vidyuttech.com/lms/api/v1/auth/validate`,
        headers: { 
          'Cookie': `vt_customer=${customerId}; vt_channel=DCO_APP; vt_auth_token=${authToken}`,
          'Content-Type': 'application/json'
        },
        data : body
      };
   return (axios(config));
}