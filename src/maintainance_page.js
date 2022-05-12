import React from "react";
import { Typography } from "@material-ui/core";

function MaintainancePage(props) {
  return (
    <div style={{display:'flex', alignItems:'center', flexDirection:'column',justifyContent:'center', height:'80vh', width:'100%'}}>
      <Typography style={{ fontFamily: "Montserrat", fontSize: 40, textAlign:'center' }}>
        This website is under maintenance and will be accessible after 48 hours...
      </Typography>
      {/* <Typography style={{ fontFamily: "Montserrat", fontSize: 40, textAlign:'center' }}>
        It will be accessible after 48 hours.
      </Typography> */}
    </div>
  );
}

export default MaintainancePage;
