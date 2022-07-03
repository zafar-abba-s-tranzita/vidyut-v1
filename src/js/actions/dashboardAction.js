import { getRequest } from "../config/service";
import AppConstants from "../constants/app-constant";
import axios from "axios";

export function getCustProfile (customerId, authToken) {
    let config = {
        method: 'get',
        url: `lms/api/v1/customer/${customerId}/profile`,
        // url: `${AppConstants.CUSTOMER_PROFILE}${customerId}/profile`,
        headers: { 
          'Cookie': `vt_customer=${customerId}; vt_channel=DCO_APP; vt_auth_token=${authToken}`,
        }
      };
   return (axios(config))

    // let raw = JSON.stringify({
    //     "channel": "DCO_APP",
    //     "identifierType": identifier,
    //     "identifierValue": value
    //   });
//    return (
//     fetch(`lms/api/v1/customer/1/profile`, {
//       method: "GET",
//       mode: "cors",
//       headers: {
//         "content-type": "application/json",
//         'Cookie': `vt_customer=${customerId}; vt_channel=DCO_APP; vt_auth_token=${authToken}`,
//       },
//     //   body: raw,
//     })
//    )
}

export function getPreviousRecharge (customerId, authToken) {
  let config = {
    method: 'get',
    url: `lms/api/v1/customer/${customerId}/rechargeHistory`,
    headers: {
      'Cookie': `vt_customer=${customerId}; vt_channel=DCO_APP; vt_auth_token=${authToken}`,
    }
  };
  return (axios(config))
}


