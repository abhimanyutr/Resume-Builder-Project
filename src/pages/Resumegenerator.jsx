import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'

function Resumegenerator() {
  return (
    <div>
      <h1 style={{ textAlign: "center",marginTop:"30px" }}>Create a Job Winning Resume in minutes</h1>

      <Stack
        direction="row"
        spacing={8}
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {/* Left Section */}
        <Box>
          <Stack
            direction="column"
            spacing={2}
            sx={{
              justifyContent: "space-around",
              alignItems: "center",
              textAlign: "center",
              border:"2px solid lightblue",
              padding:"30px",
              margin:"40px",
              borderRadius:"10px",
              boxShadow:"1px 2px 3px 1px gray",
              
            }}
          >
            <h2>Add your Information</h2>
            <h3>Add pre-written code examples to each section</h3>
            <h4>Step 1</h4>
            
          </Stack>
        </Box>

        {/* Right Section */}
        <Box>
          <Stack
            direction="column"
            spacing={2}
            sx={{
               justifyContent: "space-around",
              alignItems: "center",
              textAlign: "center",
              border:"2px solid lightblue",
              padding:"30px",
              margin:"40px",
              borderRadius:"10px",
              boxShadow:"1px 2px 3px 1px gray",
            }}
          >
            <h2>Download Resume</h2>
            <h3>Add pre-written code examples to each section</h3>
            <h4>Step 2</h4>

            
          </Stack>
          
        </Box>
        
      </Stack>
      <Box>  <Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "center",
    alignItems: "center",
    marginBottom:"50px",
  }}
><Link to="/form">
              <button style={{padding:"10px",backgroundColor:"lightblue",borderRadius:"5px",width:"200px"}}><b>Create Resume</b></button> 
            </Link></Stack>   
</Box>
    </div>
  )
}

export default Resumegenerator
