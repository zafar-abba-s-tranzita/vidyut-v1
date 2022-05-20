import { StarOutline } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function ScreenFourLongText() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10}}>
        <div style={{display: 'flex', flexDirection: 'row', width: '80vw', justifyContent: 'space-between'}}>
            <StarOutline /> <Typography > Recharge KMs anytime-anywhere</Typography>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', width: '80vw', justifyContent: 'space-between'}}>
            <StarOutline /> <Typography > Check vehicle running status realtime </Typography>
        </div>
        <div style={{display: 'flex', flexDirection: 'row',  width: '80vw', justifyContent: 'space-between'}}>
            <StarOutline /> <Typography > Monthly step-up/down the tariff rate</Typography>
        </div>
    </div>
  )
}
