import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <h2>Emp App</h2>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='primary' href='./add'>ADD</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='primary' href='./view'>VIEW</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='primary' href='./log'>REGISTER&nbsp; / &nbsp; LOGIN</Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar