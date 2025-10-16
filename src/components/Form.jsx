import React, { useState } from 'react'
import { Stack } from '@mui/material'
import Box from '@mui/material/Box'
import Steps from './Steps'
import Preview from './Preview'
function Form() {

//used for state-lifting 
const[resumeData,setresumeData]=useState({
 //state structure
  personalDetails:{
    fullName:"",
    gender:"",
    jobTitle:"",
    location:"",
    email:"",
    phoneNumber:"",
    github:"",
    linkedIn:"",
    portfolio:""
  },
  educationDetails:{
  courseName:"",
  collegeName:"",
  university:"",
  cgpa:"",
  yearOfPass:""
  },
  workExperience:{
    jobTitle:"",
    company:"",
    location:"",
    duration:"",
  },
  skills:[],

  summary:""

})
const[isFinished,setisFinised]=useState(false);

const[options,setOptions]=useState(true);

const[resumeId,setResumeId] = useState("");
  return (
    <div>
      {isFinished ? <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
          textAlign:"Center",
          marginBottom:"100px",
          marginTop:"50px"
        }}
      >
        <Box>
        <Preview setOptions={setOptions}   resumeData={resumeData} setresumeData={setresumeData} resumeId={resumeId} setResumeId={setResumeId}/>
      </Box>
      </Stack> :  <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
          textAlign:"Center",
          marginBottom:"100px",
          marginTop:"50px"
        }}
      >
      <Box>
        <Steps resumeData={resumeData} setresumeData={setresumeData} setisFinised={setisFinised} resumeId={resumeId} setResumeId={setResumeId}/>
      </Box>

      <Box>
        <Preview  resumeData={resumeData} setresumeData={setresumeData}/>
      </Box>

      </Stack>}
    </div>
  )
}


export default Form
