import React from 'react'

import Box from '@mui/material/Box'
import bgImage from '../assets/landing.png'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const Example = () => {
  return (
    <Box
      class="candles"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        height: '100vh',
        width: '100',
        color: '#f5f5f5',
      }}
    >
      <AppBar
        position="fixed"
        style={{
          background: 'transparent',
        }}
      >
        <Toolbar>
          <Typography variant="h6"></Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Example
