import { StarOutline } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Icon1 from '../../../assets/images/onboarding-svg/recharge (1) 1.svg'
import Icon2 from '../../../assets/images/onboarding-svg/speedometer 1.svg'
import Icon3 from '../../../assets/images/onboarding-svg/tax 1.svg'

export default function ScreenFourLongText() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 5}}>
        <div style={{display: 'flex', flexDirection: 'row', width: '80vw', justifyContent: 'space-between'}}>
            <img src={Icon1}  /> <Typography > Recharge KMs anytime-anywhere</Typography>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', width: '80vw', justifyContent: 'space-between'}}>
            <img src={Icon2}  /> <Typography > Check vehicle running status realtime </Typography>
        </div>
        <div style={{display: 'flex', flexDirection: 'row',  width: '80vw', justifyContent: 'space-between'}}>
            <img src={Icon3}  /> <Typography > Monthly step-up/down the tariff rate</Typography>
        </div>
    </div>
  )
}
