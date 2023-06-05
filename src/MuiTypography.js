import { Typography } from '@mui/material'
import React from 'react'

const MuiTypography = () => {
  return (
    <div>
       <Typography variant='h1'>H1 heading</Typography>
       <Typography variant='h2'>H2 heading</Typography>
       <Typography variant='h3'>H3 heading</Typography>
       <Typography variant='h4' component='h1' gutterBottom>H4 heading</Typography>
       <Typography variant='h5'>H5 heading</Typography>
       <Typography variant='h6'>H6 heading</Typography>
       <Typography variant='subtitle1'>Sub Title 1</Typography>
       <Typography variant='subtitle2'>Sub Title 2</Typography>
    </div>
  )
}

export default MuiTypography
