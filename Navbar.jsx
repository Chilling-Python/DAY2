import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My APP
          </Typography>

          <Button ><Link 
          to={'/'}
           style={{textDecoration:"none", color:"white"}}>
            Login
            </Link>
            </Button>
          <Button >
            <Link
            to={'/r'}
            style={{textDecoration:"none", color:"white"}}>
            registration
            </Link>
            </Button>
          <Button >
          <Link
            to={'/t'}
            style={{textDecoration:"none", color:"white"}}>
            Table 
            </Link>
            </Button>
            <Button >
            <Link
            to={'/s'}
            style={{textDecoration:"none", color:"white"}}>
            Statebasic
            </Link>
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
