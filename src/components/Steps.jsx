import React, { useState } from 'react'
import { Stack } from '@mui/material'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { addResumeAPI } from '../services/allAPIs';


import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Swal from "sweetalert2";


const steps = ['Basic Information', 'Contact Details', 'Education details','Work Experience','Skills','Review & Submit'];
function Steps({resumeData,setresumeData,setisFinised}) {
console.log(resumeData);


  const{ personalDetails, contactDetails, educationDetails , proffDetails , skills , summery}=resumeData;

  //to hold data from input box of skill
  const[userSkills,setuserSkills]=useState("");
 
  
  const Suggesions = ["HTML","JavaScript","NodeJs","Angular","NodeJs","Java","ExpressJs","Python","springboot"]


  const addSkills=(skillsenter)=>
  {
    console.log(skillsenter);
    // console.log(userSkills);
    if(resumeData.skills.includes(skillsenter))
    {
      alert(`${userSkills} already added as Skill`);
    }
    else{
      //New skill added to the skills array
      setresumeData(data=>({...data,skills:[...data.skills,skillsenter]}))
    }
    
  }
  const handleAddResume=async()=>{
    // try{
        
    //     const response = await addResumeAPI(resumeData);
    //     console.log(response);
    //     swal({
    //       title: "Success!",
    //       text: "Your data has been saved!",
    //       icon: "success",
    //       timer: 3500, //  close after 2 seconds
    //       buttons: false, // Hide the Ok button
    //      })
    //     setisFinised(true);

    //    }catch(err){
    //     swal({title: "Error!",
    //       text: err,
    //     icon:"error"}); 
    //  }
      try {
      const response = await addResumeAPI(resumeData)
      console.log(response);
      Swal.fire({
        title: 'Congrats!',
        text: 'You have created your resume',
        icon: 'success',
        confirmButtonText: 'Finish'
      })
      setisFinised(true)

    }
    catch (err) {
      console.log("ERROR" + err)
      Swal.fire({
        title: 'Error!',
        text: 'errorMessage' + err,
        icon: 'error',
        confirmButtonText: 'Back'
      })
    }
  }

   const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 3;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const renderSwith=(step)=>{
    switch(step){
      case 0:return(<div style={{marginTop:"20px"}}><h2>Personal Details</h2>
      
      <Box sx={{ display: 'block',marginTop:"20px"}}>
      
      <div>
        
        
        <FormControl fullWidth sx={{ m: 1 ,width: '60ch'}} variant="standard">
          <InputLabel htmlFor="fullname">Full Name</InputLabel>
          {/* update the value of setState (setresumeData) Using state-lifting */}
          <Input id="fullName standard-adornment-amount"  onChange={e=>setresumeData({...resumeData,personalDetails:{...resumeData.personalDetails,fullName:e.target.value}})}
            
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          /> 
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '60ch'}} variant="standard">
          <InputLabel htmlFor="Gender">Gender</InputLabel>
          <Input onChange={e=>setresumeData({...resumeData,personalDetails:{...resumeData.personalDetails,gender:e.target.value}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '60ch'}} variant="standard">
          <InputLabel htmlFor="jobTitle">Job Title</InputLabel>
          <Input  onChange={e=>setresumeData({...resumeData,personalDetails:{...resumeData.personalDetails,jobTitle:e.target.value}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '60ch'}} variant="standard">
          <InputLabel htmlFor="location">Location</InputLabel>
          <Input  onChange={e=>setresumeData({...resumeData,personalDetails:{...resumeData.personalDetails, location:e.target.value}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      
    </Box>

      </div>
    
      

       

      )
        
        case 1:return(<div style={{marginTop:"20px"}}><h2>Contact Details</h2>
        
        <Box sx={{ display: 'block'}}>
      
      <div>
        
        
        <FormControl fullWidth sx={{ m: 1 ,width: '60ch'}} variant="standard">
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input onChange={e=>setresumeData({...resumeData,personalDetails:{...resumeData.personalDetails,  email:e.target.value}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          /> 
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '60ch'}} variant="standard">
          <InputLabel htmlFor="phonenumber">Phone Number</InputLabel>
          <Input onChange={e=>setresumeData({...resumeData,personalDetails:{...resumeData.personalDetails, phoneNumber:e.target.value}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '29ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">LinkedIn Profile Link</InputLabel>
          <Input onChange={e=>setresumeData({...resumeData,personalDetails:{...resumeData.personalDetails, linkedIn:e.target.value}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 ,width: '29ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Github Profile Link</InputLabel>
          <Input onChange={e=>setresumeData({...resumeData,personalDetails:{...resumeData.personalDetails, github:e.target.value}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      <div>
         <FormControl fullWidth sx={{ m: 1 ,width: '60ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Portfolio Link</InputLabel>
          <Input onChange={e=>setresumeData({...resumeData,personalDetails:{...resumeData.personalDetails,  portfolio:e.target.value}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      
    </Box>

        </div>)
        
        case 2:return(<div style={{marginTop:"20px"}}><h2>Education Details</h2>
        
        <Box sx={{ display: 'block'}}>
      
      <div>
        
        
        <FormControl fullWidth sx={{ m: 1 ,width: '60ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Course Name</InputLabel>
          <Input onChange={e=>setresumeData({...resumeData,educationDetails:{...resumeData.educationDetails,  courseName:e.target.value}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          /> 
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '60ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">College Name</InputLabel>
          <Input onChange={e=>setresumeData({...resumeData,educationDetails:{...resumeData.educationDetails, collegeName:e.target.value}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '60ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">University Name</InputLabel>
          <Input onChange={e=>setresumeData({...resumeData,educationDetails:{...resumeData.educationDetails, university:e.target.value}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '29ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">CGPA</InputLabel>
          <Input onChange={e=>setresumeData({...resumeData,educationDetails:{...resumeData.educationDetails, cgpa:e.target.value}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 ,width: '29ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Year of Passout</InputLabel>
          <Input onChange={e=>setresumeData({...resumeData,educationDetails:{...resumeData.educationDetails,  yearOfPass:e.target.value}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      
    </Box>
        </div>)
        
       case 3:return(<div style={{marginTop:"20px"}}><h2>Professonal Details</h2>
       
       <Box sx={{ display: 'block'}}>
      
      <div>
        
        
        <FormControl fullWidth sx={{ m: 1 ,width: '60ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Job / Intership</InputLabel>
          <Input  onChange={e=>setresumeData({...resumeData, workExperience:{...resumeData.workExperience, jobTitle:e.target.value}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          /> 
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '60ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Company Name</InputLabel>
          <Input onChange={e=>setresumeData({...resumeData, workExperience:{...resumeData.workExperience, company:e.target.value}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '60ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Location</InputLabel>
          <Input onChange={e=>setresumeData({...resumeData, workExperience:{...resumeData.workExperience, location:e.target.value}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '60ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Duration</InputLabel>
          <Input onChange={e=>setresumeData({...resumeData, workExperience:{...resumeData.workExperience,duration:e.target.value}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      
    </Box>


       </div>)
        
        case 4:return(<div style={{marginTop:"20px"}}><h2>Skills</h2>
        
        <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '65ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Add Skill</InputLabel>
          <Input onChange={e=>setuserSkills(e.target.value)}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      <div>
        <Button onClick={()=>addSkills(userSkills)} sx={{width:"25%",marginY:"10px"}} variant="contained">ADD</Button>
        <h2 style={{textAlign:"left",paddingLeft:"19%",paddingTop:"20px"}}>Suggesions :</h2>

<Stack
    direction="row"
    spacing={2}
    sx={{
      justifyContent: "center",
      alignItems: "center",
      marginTop:"20px",
    }}
  >

<div>
         <Stack
  direction={"row"}
  spacing={2}
  sx={{
    flexWrap: "wrap",
    marginLeft:"200px",
    marginRight:"70px",
    justifyContent: "start",
    alignItems: "center",
    gap:"10px"
  }}
>
  {Suggesions.length > 0
    ? Suggesions.map((items, index) => (
        <Button onClick={()=>addSkills(items)} key={index} variant="outlined">
          {items}
        </Button>
      ))
    :"EmptyArray"}
</Stack>

          
          
       
          
       </div>

  </Stack>

       <h2 style={{textAlign:"left",paddingLeft:"19%",paddingTop:"30px", marginBottom:"20px"}}>Added Skills :</h2>

       <Stack
  direction={"row"}
  spacing={2}
  sx={{
    flexWrap: "wrap",
    marginLeft:"200px",
    marginRight:"70px",
    justifyContent: "start",
    alignItems: "flex-start",
    gap:"10px"
  }}
>
  {skills.length > 0
    ? skills.map((items, index) => (
        <Button key={index} variant="contained">
          {items}
        </Button>
      ))
    :""}
</Stack>

      </div>

        </div>)
        
         case 5:return(<div style={{marginTop:"20px"}}> <h2>Professional Summery</h2>
         
          <Box sx={{ display: 'block',marginTop:"20px"}}>
      
      <div>
        
         <TextField  onChange={e=>setresumeData({...resumeData, summary:e.target.value})}  fullWidth label="Short summary of yourself" id="fullWidth" placeholder='Short summary of yourself...'
  
 />
      </div>
      
      
    </Box>

         </div>)
        
    }
  }

  return (
    <div>
      <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 10, mb: 1,color:"green",fontSize:"large" }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box>
            {renderSwith(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            
              {activeStep === steps.length - 1 ? <Button onClick={handleAddResume}>Finish</Button> : <Button onClick={handleNext}>Next</Button>}
            
          </Box>
        </React.Fragment>
      )}
    </Box>
    </div>
  )
}

export default Steps
