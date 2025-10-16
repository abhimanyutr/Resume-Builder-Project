import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


// Tooltip
import Tooltip from '@mui/material/Tooltip';
// React Icons
import { AiOutlineFileProtect } from "react-icons/ai";
function Header() {
  return (
    <div>
      <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
             
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <AiOutlineFileProtect /> Resume Builder
          </Typography>
          <Tooltip title="About Resume Builder"> 
            <Button color="inherit">About</Button>
          </Tooltip>
         
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Header
