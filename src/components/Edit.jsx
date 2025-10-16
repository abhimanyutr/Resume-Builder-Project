import React, { useEffect, useState } from 'react'
import Tooltip from '@mui/material/Tooltip';
import { Button, duration, IconButton, Typography } from '@mui/material';
import { FaRegEdit } from "react-icons/fa";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import {Stack} from '@mui/material';
import { IoMdClose } from "react-icons/io";
import { getHistoryAPI, getResumeHistoryAPI, updateHistoryAPI } from '../services/allAPIs';

IconButton
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxHeight: '80vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Edit({resumeData,resumeId,setresumeData}) {
 
  const [resumeHistory,setResumeHistory] = useState({});
  const{ personalDetails, contactDetails, educationDetails , proffDetails , skills , summery}=resumeData;
  console.log(resumeId,resumeData);

  console.log(resumeHistory);
  

  const Suggesions = ["HTML","JavaScript","NodeJs","Angular","NodeJs","Java","ExpressJs","Python","springboot"]

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 const getResume = async (resumeId) => {
  try {
    const response = await getResumeHistoryAPI(resumeId);
    console.log(response);
     setResumeHistory(response?.data);
  } catch (error) {
    console.error("Error fetching resume:", error);
  }
};

const updateResume = async () => {
  try {
    const result = await updateHistoryAPI(resumeId, resumeHistory)
    console.log("API Result :",result)
    console.log("The Id from edit:", result.id)
    setresumeData(result?.data);
    handleClose();
  } catch (error) {
    console.log("Error:", error)
  }
}



//to hold data from input box of skill
    const[userSkills,setuserSkills]=useState("");

  const addSkills=(skillsenter)=>
  {
    console.log(skillsenter);
    // console.log(userSkills);
    if(resumeHistory.skills.includes(skillsenter))
    {
      alert(`${userSkills} already added as Skill`);
    }
    else{
      //New skill added to the skills array
      setResumeHistory({...resumeHistory,skills:[...resumeHistory.skills,skillsenter]})
    }
    
  }

  const deleteItem = (deleteSkill) => {
    setResumeHistory({...resumeHistory,skills: resumeHistory.skills.filter((item)=> item != deleteSkill)});
  };


useEffect(() => {
  if (resumeId) {
    getResume(resumeId);
  }
}, [resumeId]);



  

  return (
    <div>
    <Tooltip title="Edit"  placement="top"><Button onClick={handleOpen} sx={{
    padding: "12px 24px",   // bigger padding
    fontSize: "20px",       // increase text/icon size
    minWidth: "64px",       // default min width (can increase)
  }}><FaRegEdit /></Button></Tooltip>

     <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
           <h3 style={{backgroundColor:"darkCyan",textAlign:"center",padding:"5px",color:"white",borderRadius:"15px"}}>EDIT</h3> 
           <div style={{marginTop:"20px"}}><h2>Personal Details</h2>
      
      <Box sx={{ display: 'block',marginTop:"20px"}}>
      
      <div>
        
        
        <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Full Name</InputLabel>
          <Input onChange={e=>setResumeHistory({...resumeHistory,personalDetails:{...resumeHistory.personalDetails,fullName:e.target.value,}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start" ></InputAdornment>}
            value={resumeHistory?.personalDetails?.fullName}
          /> 
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Gender</InputLabel>
          <Input 
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            value={resumeHistory?.personalDetails?.gender}
          />
          
        </FormControl>
        
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Job Title</InputLabel>
          <Input onChange={e=>setResumeHistory({...resumeHistory,personalDetails:{...resumeHistory.personalDetails,jobTitle:e.target.value}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            value={resumeHistory?.personalDetails?.jobTitle}
          />
          
        </FormControl>
        
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Location</InputLabel>
          <Input onChange={e=>setResumeHistory({...resumeHistory,personalDetails:{...resumeHistory.personalDetails,location:e.target.value}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            value={resumeHistory?.personalDetails?.location}
          />
          
        </FormControl>
        
      </div>

      <div style={{marginTop:"20px"}}><h2>Contact Details</h2>
        
        <Box sx={{ display: 'block'}}>
      
      <div>
        
        
        <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Email</InputLabel>
          <Input  onChange={e=>setResumeHistory({...resumeHistory,personalDetails:{...resumeHistory.personalDetails,email:e.target.value}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            value={resumeHistory?.personalDetails?.email}
          /> 
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Phone Number</InputLabel>
          <Input onChange={e=>setResumeHistory({...resumeHistory,personalDetails:{...resumeHistory.personalDetails,phoneNumber:e.target.value}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            value={resumeHistory?.personalDetails?.phoneNumber}
          />
          
        </FormControl>
        
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '29ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">LinkedIn Profile Link</InputLabel>
          <Input onChange={e=>setResumeHistory({...resumeHistory,personalDetails:{...resumeHistory.personalDetails,linkedIn:e.target.value}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            value={resumeHistory?.personalDetails?.linkedIn}
          />
          
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 ,width: '29ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Github Profile Link</InputLabel>
          <Input
            id="standard-adornment-amount" onChange={e=>setResumeHistory({...resumeHistory,personalDetails:{...resumeHistory.personalDetails,github:e.target.value}})}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            value={resumeHistory?.personalDetails?.github}
          />
          
        </FormControl>
        
      </div>
      <div>
         <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Portfolio Link</InputLabel>
          <Input
            id="standard-adornment-amount" onChange={e=>setResumeHistory({...resumeHistory,personalDetails:{...resumeHistory.personalDetails,location:e.porfolio.value}})}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            value={resumeHistory?.personalDetails?.portfolio}
          />
          
        </FormControl>
        
      </div>
      
    </Box>

        </div>


        <div style={{marginTop:"20px"}}><h2>Education Details</h2>
        
        <Box sx={{ display: 'block'}}>
      
      <div>
        
        
        <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Course Name</InputLabel>
          <Input
            id="standard-adornment-amount" onChange={e=>setResumeHistory({...resumeHistory,educationDetails:{...resumeHistory.educationDetails,courseName:e.target.value}})}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            value={resumeHistory?.educationDetails?.courseName}
          /> 
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">College Name</InputLabel>
          <Input onChange={e=>setResumeHistory({...resumeHistory,educationDetails:{...resumeHistory.educationDetails,collegeName:e.target.value}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            value={resumeHistory?.educationDetails?.collegeName}
          />
          
        </FormControl>
        
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">University Name</InputLabel>
          <Input
            id="standard-adornment-amount" onChange={e=>setResumeHistory({...resumeHistory,educationDetails:{...resumeHistory.educationDetails,university:e.target.value}})}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            value={resumeHistory?.educationDetails?.university}
          />
          
        </FormControl>
        
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '29ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">CGPA</InputLabel>
          <Input
            id="standard-adornment-amount" onChange={e=>setResumeHistory({...resumeHistory,educationDetails:{...resumeHistory.educationDetails,cgpa:e.target.value}})}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            value={resumeHistory?.educationDetails?.cgpa}
          />
          
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 ,width: '29ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Year of Passout</InputLabel>
          <Input onChange={e=>setResumeHistory({...resumeHistory,educationDetails:{...resumeHistory.educationDetails,yearOfPass:e.target.value}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            value={resumeHistory?.educationDetails?.yearOfPass}
          />
          
        </FormControl>
        
      </div>
      
    </Box>
        </div>


        <div style={{marginTop:"20px"}}><h2>Professonal Details</h2>
       
       <Box sx={{ display: 'block'}}>
      
      <div>
        
        
        <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Job / Intership</InputLabel>
          <Input  onChange={e=>setResumeHistory({...resumeHistory,workExperience:{...resumeHistory.workExperience,jobTitle:e.target.value}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            value={resumeHistory?.workExperience?.jobTitle}
          /> 
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Company Name</InputLabel>
          <Input onChange={e=>setResumeHistory({...resumeHistory,workExperience:{...resumeHistory.workExperience,company:e.target.value}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            value={resumeHistory?.workExperience?.company}
          />
          
        </FormControl>
        
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Location</InputLabel>
          <Input onChange={e=>setResumeHistory({...resumeHistory,workExperience:{...resumeHistory.workExperience,location:e.target.value}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            value={resumeHistory?.workExperience?.location}
          />
        </FormControl>
        
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Duration</InputLabel>
          <Input onChange={e=>setResumeHistory({...resumeHistory,workExperience:{...resumeHistory.workExperience,duration:e.target.value}})}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            value={resumeHistory?.workExperience?.duration}
          />
          
        </FormControl>
        
      </div>
      
    </Box>


       </div>

       <div style={{marginTop:"20px"}}><h2>Skills</h2>
        
        <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Add Skill</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            value={resumeHistory?.skills}
          />
          
        </FormControl>
        
      </div>
      <div>
        <h3 style={{color:"lightgray",textAlign:"left",paddingLeft:"4%",paddingTop:"20px"}}>ADD</h3>
        <h2 style={{textAlign:"left",paddingLeft:"4%",paddingTop:"20px"}}>Suggesions :</h2>
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
         spacing={1}
         sx={{
           flexWrap: "wrap",
           
           justifyContent: "start",
           alignItems: "center",
           gap:"4px"
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

       <h2 style={{textAlign:"left",paddingLeft:"1%",paddingTop:"20px", marginBottom:"10px"}}>Added Skills :</h2>
        
         <Stack
          direction={"row"}
          spacing={2}
          sx={{
            flexWrap: "wrap", 
            justifyContent: "start",
            paddingLeft:"10px",
            alignItems: "flex-start",
            gap:"3px"
          }}
        >
          {resumeHistory?.skills?.length > 0
  ? resumeHistory.skills.map((items, index) => (
      <p key={index} variant="contained">
        {items}
        <IconButton size="small" sx={{color:'red'}} onClick={() => deleteItem(items)}> <IoMdClose/></IconButton>
      </p>
    ))
  : null
}
        </Stack>
        

      </div>

        </div>


        <div style={{marginTop:"20px"}}> <h2>Professional Summery</h2>
         
          <Box sx={{ display: 'block',marginTop:"20px"}}>
      
      <div>
        
         <TextField onChange={e=>setResumeHistory({...resumeHistory,summary:e.target.value})} fullWidth label="Short summary of yourself" id="fullWidth" placeholder='Short summary of yourself...' value={resumeHistory?.summary} />
      </div>
      
      
    </Box>

         </div>
      
    </Box>
          
      </div>
<div style={{display:"flex",justifyContent:"space-between",marginTop:"15px"}}>
  <Button variant="contained"  onClick={() =>updateResume() }>
  Save
</Button>
  <Button variant="text" onClick={() => window.location.href = '/form'}>
  Cancel
</Button>
</div>
          </Box>
          
        </Fade>
      </Modal>

    </div>
  )
}

export default Edit
