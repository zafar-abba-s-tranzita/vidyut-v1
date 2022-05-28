import React, { useCallback } from 'react'
import VtLogo from "../../../images/VTlogo4 3.png"
import autoEv from "../../../images/apremium-electric-sports-sedan-car-isolated.png"
import Mail from "../../../images/mail.png"
import Phone from "../../../images/phone.png"
import { Checkbox, Typography } from '@mui/material'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginWithEmail from './loginWithEmail'
function Login() {
  return (
    <div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Link to={'/'} style={{textDecoration: 'none'}}>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 40}}>
                <img src={VtLogo} alt="VT Logo" />
            </div>
            </Link>
            <div style={{marginTop: 90}}>
               <div style={{display: 'flex', flexDirection: 'row', background: '#f4f4f4', width: '80vw', justifyContent: 'space-around', padding: '10px 15px', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', borderRadius: '20px', color:'#000'}}>
                    <div style={{padding: '5px 10px', width: 40, borderRadius: '20px'}}>
                        हिन्दी
                    </div>
                    <div style={{padding: '5px 10px', width: 60, borderRadius: '20px', backgroundColor: '#036463', color:'#fff'}}>
                        English
                    </div>
                    <div style={{padding: '5px 10px', width: 40, borderRadius: '20px'}}>
                        Telgu
                    </div>
                    <div style={{padding: '5px 10px', width: 40, borderRadius: '20px'}}>
                        Tamil
                    </div>
               </div>
            </div>
            
            
            <div style={{display: 'flex', flexDirection: 'column', marginTop: 30,  alignItems: 'center', marginTop: 90}}>
                    
                    <Link to={'/phoneLogged'} style={{textDecoration: 'none'}}>
                    <div style={{width: '324px', height: '48px', borderRadius: '20px', backgroundColor:'#f4f4f4', color: '#036463',textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: 3, display: 'flex'}}> 
                    <img src={Phone} width={20} height={20} style={{marginTop: 17, marginRight: 20, marginLeft: 20}}/> <p>Login With Mobile Number</p>
                    </div>
                    </Link>
                        
                        <Typography style={{font:'Montserrat', textAlign: 'center', color: '#036463', fontSize: 12, marginTop: '5px'}}> OR </Typography>
                    
                    <Link to={'/emailLogged'} style={{textDecoration: 'none'}}>
                    <div style={{width: '324px', height: '48px', borderRadius: '20px', backgroundColor:'#f4f4f4', color: '#036463', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', display: 'flex'}}
                    > 
                     <img src={Mail} width={20} height={20} style={{marginTop: 17, marginRight: 20, marginLeft: 20}} /> <p>Login With Email </p>
                    </div>
                    </Link>
                    
                    
                    
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 95}}>
                        <Checkbox />
                        <Typography style={{font:'Montserrat', textAlign: 'center', color: '#036463', fontSize: 8}}>I agree to <b>Terms & Conditions</b> and <b>Privacy Policy.</b> </Typography>    
                    </div>
            </div>
            
            
            
            <div style={{display: 'flex', flexDirection: 'column', marginTop: 5, alignItems: 'flex-start', marginTop: 20}}>
                <img src={autoEv} alt={"Auto Ev"} />
            </div>
        </div>
    </div>
  )
}

export default Login