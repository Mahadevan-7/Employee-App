import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <br /><br />

        <h1>Login</h1>

        <TextField variant='outlined' label='Name' required></TextField>
        <br /><br />
        <TextField variant='outlined' label='Password' required></TextField>
        <br /><br />
        <Button variant='contained'>LOGIN</Button> <br /><b>OR</b> <br /><b>New User ?</b> <a href="/Signup">Signup</a>
    </div>
  )
}

export default Login