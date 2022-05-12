import React from 'react'
import VtLogo from "../../../images/VTlogo4 3.png"
import autoEv from "../../../images/apremium-electric-sports-sedan-car-isolated.png"

function Login() {
    
  return (
    <div>
        <div style={{display: 'flex', flexDirection: 'column', color: 'red'}}>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 150}}>
                <img src={VtLogo} alt="VT Logo" />
            </div>
            <div style={{display: 'flex', flexDirection: 'row', color: 'red', justifyContent: 'space-around', marginTop: 90}}>
               <div style={{backgroundColor: 'grey', padding: '2px 5px', width: 40}}>
                   Hindi
               </div>
               <div style={{backgroundColor: 'grey', padding: '2px 5px', width: 40}}>
                   Hindi
               </div>
               <div style={{backgroundColor: 'grey', padding: '2px 5px', width: 40}}>
                   Hindi
               </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', marginTop: 30, padding: '5px 15px', alignItems: 'center', marginTop: 90}}>
                    <input type='text' />
                        <h4>OR</h4>
                    <input type='password' />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', marginTop: 30, alignItems: 'flex-start', marginTop: 90}}>
                <img src={autoEv} alt={"Auto Ev"} />
            </div>
        </div>
    </div>
  )
}

export default Login