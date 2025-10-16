import React from 'react'
import Stack from "@mui/material/Stack";
function Footer() {
  return (
    <section id="footer">
        
<Stack
  direction="column"
  spacing={1}
  sx={{
    paddingTop:"10px",
    paddingBottom:"10px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#00acc1",
  }}
> 
<h2>Contact Us </h2>
<h5>Resumebuilder@gmail.com </h5>
<h5>9865348998</h5>
<h2>
  
  Connect with Us 
</h2>
<h5>Designed & Built </h5>
<h5>Instagram </h5>
<h5>Twiter </h5>
</Stack>

  </section>
  )
}

export default Footer
