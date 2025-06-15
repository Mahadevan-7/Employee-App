import { Button, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {


    var navigate = useNavigate() /// 
  return (
    <div>
        <br /><br />
        <h1>Signup</h1>
        <br /><br />
        <TextField variant='outlined' label='Email' type='email' required></TextField>
        <br /><br />
        <TextField variant='outlined' label='Name' required></TextField>
        <br /><br />
        <TextField variant='outlined' label='Password' type='password' required></TextField>
        <br /><br />
        <Button variant='contained'>Register</Button><br /><b>OR</b><br /><b>Already have an Acooount? <a href="/log">Login</a></b>
    </div>
  )
}

export default Signup