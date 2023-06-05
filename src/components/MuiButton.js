import React from 'react'
import Button from '@mui/material/Button';
import '../App.css'

const MuiButton = () => {
  return (
    <div className='App'>
      <Button variant='text'>Text</Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>
    </div>
  )
}

export default MuiButton
