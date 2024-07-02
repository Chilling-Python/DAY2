import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

function Reg() {
  return (
    <div>
        <Typography variant ="h4">Registration Form</Typography> 
      <TextField variant='standard' label='Name'/>
      <br /><br />
      <TextField variant="standard" label='Age'/>
      <br /><br />
      <TextField variant="standard" label='Email'/>
      <br /><br />
      <TextField variant="standard" label="Father's Name"/>
      <br /><br />
      <TextField variant="standard" label="Mother's Name"/>
      <br /><br />
      <TextField variant="outlined" label='password'/>
      <br /><br />
      <TextField variant="outlined" label='confirm password'/>
      <br /><br />
      <Button variant="contained" color='success'>Submit</Button>
     
    </div>
  )
}

export default Reg
