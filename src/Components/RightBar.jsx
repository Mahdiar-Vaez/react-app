import { Box } from '@mui/material'
import React from 'react'

export default function RightBar() {
  return (
    <Box sx={{display:{xs:'none',sm:'block'}}} flex={2} p={2} bgcolor={'red'}>RightBar</Box>
  )
}
