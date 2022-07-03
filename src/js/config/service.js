// protected apis

export const getRequest = async (url, urlMethod, values = {}) => {
    // return function (dispatch) {
    let accesToken = await JSON.parse(localStorage.getItem("customerInfo")).authToken
    let vt_customer = await JSON.parse(localStorage.getItem("customerInfo")).customerId
  
    return fetch(url, {
      method: urlMethod,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Cookie": `vt_customer=${vt_customer}; vt_channel=DCO_APP; vt_auth_token=${accesToken};`
      },
    })
      .then((res) => {
        if (!res.status === 200) {
          return res.status;
        }
        return res;
      })
      .then(async (response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 401) {
        //   //call refreshtoken
        //   await refreshTok(refreshToken);
        } else {
          return Promise.reject(response);
        }
      });
  };