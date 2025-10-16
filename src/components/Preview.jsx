import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Button, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import jsPDF from 'jspdf'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import html2canvas from 'html2canvas'
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Edit from './Edit';
import { addHistoryAPI } from '../services/allAPIs';
import { useEffect } from 'react';

function Preview({resumeData,setresumeData,setOptions,resumeId,setResumeId}) {
  console.log(resumeData);

  //destructuring from resumeData
  const{ personalDetails, contactDetails, educationDetails , proffDetails , skills , summery}=resumeData;

  //for PDF Download  //import html2canvas
  const handleDownload=async()=>{

    //1. Get an element
      const resultPdf = document.getElementById('result');
      console.log(resultPdf);

    //2. To convert as canvas for pdf
      const canvas =await html2canvas(resultPdf,{scale:2})
      console.log(canvas);


         
    //TO Set current date and time 
    const currentDATE = new Date().toLocaleString();
    console.log(`Current Date is : ${currentDATE}`);
     
    // //Another method for DATE and Time
    //  const currentDate = new Date();
    //  FormatedDateTime =  `${currentDate.toLocaleDateString()}, ${currentDate.toLocaleTimeString()}`;
    //  console.log(FormatedDateTime);

      
    //3. convert canvas to imageURL
      const imgUrl = canvas.toDataURL('image/png');
      console.log(imgUrl);
      
    //4. Covert to pdf  // install jspdf library
    const pdf = new jsPDF('p','mm','a4')
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height*pdfWidth)/canvas.width
    //image to pdf
    pdf.addImage(imgUrl,'PNG',0,0,pdfWidth,pdfHeight)
    pdf.save(`Resume ${currentDATE}.pdf`)
    

     

   //after downlaod add it to the history
    try {
      const response = await addHistoryAPI({...resumeData,currentDATE,imgUrl})
      console.log(response);
       setResumeId(response?.data?.id)// here we use ? for geting object data because we use to get by nested way so sometime it cannot give data inside the object.
      console.log("Received id : ", response?.data?.id);
     
   
      
      
    } catch (error) {
      console.log("Error"+error);
      
    }
  }

   useEffect(() => {
  if(resumeId) {
    console.log("Updated resumeId:", resumeId);
    // You can trigger fetch or download here
  }
}, [resumeId]);

  return (
    <div>

<Box>
  {setOptions? <Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight:"20px",
    gap:"25px",
    color:"darkCyan",
    fontWeight:"bold",
    fontSize:"20px"
  }}
> 

<Edit resumeData={resumeData} resumeId={resumeId} setresumeData={setresumeData}/>


  <Tooltip title="Download"  placement="top"> 
    <Button onClick={handleDownload} sx={{
    padding: "12px 24px",   // bigger padding
    fontSize: "20px",       // increase text/icon size
    minWidth: "64px",       // default min width (can increase)
  }}><FaFileDownload/> </Button> </Tooltip>

 <Link to={'/history'}>
  <Tooltip title="History"  placement="top">
   <Button sx={{
    padding: "12px 24px",   // bigger padding
    fontSize: "20px",       // increase text/icon size
    minWidth: "64px",       // default min width (can increase)
   }}><FaHistory />
  </Button> </Tooltip></Link> 
</Stack>  :  <Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight:"20px",
    gap:"25px",
    color:"darkCyan",
    fontWeight:"bold",
    fontSize:"20px"
  }}
> 
 <Link to={'/history'}>
  <Tooltip title="History"  placement="top">
   <Button sx={{
    padding: "12px 24px",   // bigger padding
    fontSize: "20px",       // increase text/icon size
    minWidth: "64px",       // default min width (can increase)
   }}><FaHistory />
  </Button> </Tooltip></Link> 
</Stack> }
       
</Box>

     <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 500,
          height: 675,
        },
      }}
    >
      
      
<Paper id="result" elevation={3}>
<Stack
  direction="column"
  spacing={2}
  sx={{
    justifyContent: "center",
    alignItems: "center",
    paddingTop:"30px",
  }}
>

<h2> {personalDetails.fullName!=""?personalDetails.fullName:"Full Name"} </h2>

<h5 style={{color:"green"}}>{personalDetails.jobTitle!=""?personalDetails.jobTitle:" Job Title "} </h5>
<Typography
  variant="body2"
  align="center"
  sx={{
    display: "flex",
    justifyContent: "center",
    gap: "15px",        // spacing between items
    fontSize: "10px",
    alignItems: "center",
  }}
>
  <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
    <FaPhoneAlt /> {personalDetails.phoneNumber || "Phone"}
  </span>

  <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
    <IoMdMail /> {personalDetails.email || "Email"}
  </span>

  <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
    <IoLocationSharp /> {personalDetails.location || "Location"}
  </span>
</Typography>

<h6><FaLinkedin /><a target='_blank' style={{color:"black"}} href={`${personalDetails.linkedIn}`}>  {personalDetails.linkedIn
!=""?"LinkedIn":" LinkedIn "} </a> | <FaGithub /> <a target='_blank' style={{color:"black"}} href="">  {personalDetails.github
!=""?personalDetails.github:" Github "} </a> | <FaLink /> <a target='_blank'style={{color:"black"}} href="">  {personalDetails.portfolio
!=""?personalDetails.portfolio:" Portfolio "} </a></h6>

 <Divider>Summary</Divider>
<p style={{ width: 430 , height:60,border:"none",textAlign:"justify",fontFamily:"initial",fontSize:"small"}}>
  {resumeData.summary !="" ? resumeData.summary:"Full Stack Developer skilled in MongoDB, Express.js, React.js, and Node.js, with experience in building scalable web applications and delivering user-friendly digital solutions. "} 
 
  
</p>

<Divider>Education</Divider>
<Stack
  direction="column"
  spacing={2}
  sx={{
    justifyContent: "left",
    alignItems: "flex-start",
    width:"430px",
  }}
            ><Typography variant='body' textAlign='left' fontWeight={"bold"} >{educationDetails.courseName != "" ? educationDetails.courseName : " Course Name "} <h6 style={{ paddingTop: "4px" }}>  {educationDetails.collegeName
              != "" ? educationDetails.collegeName : " College Name "} |  {educationDetails.cgpa != "" ? "CGPA : "+ educationDetails.cgpa : " CGPA "}  |  {educationDetails.yearOfPass != "" ? "Year of Pass : "+ educationDetails.yearOfPass : " Year of Passout "}</h6>
                <h6 style={{ paddingTop: "5px" }}>{educationDetails.university != "" ? educationDetails.university : " University "}</h6>
              </Typography>



</Stack>
     
   
<Divider>Professional Experience</Divider>
<Stack
  direction="column"
  spacing={2}
  sx={{
    justifyContent: "left",
    alignItems: "flex-start",
    width:"430px",
  }}
>
  <Typography variant='body' textAlign='left' fontWeight={"bold"} > {resumeData.workExperience
.jobTitle!= "" ? resumeData.workExperience
.jobTitle: " Job Title "}   <h5 style={{paddingTop:"4px"}}>  {resumeData.workExperience
.company!= "" ? resumeData.workExperience
.company: " Company Name "}  |  {resumeData.workExperience
.duration!= "" ? resumeData.workExperience
.duration: " Duration "}   </h5>
<h6>{resumeData.workExperience
.location!= "" ? resumeData.workExperience
.location: " Location "}</h6> </Typography>
</Stack>

<Divider>Skills</Divider>
<Stack
  direction="row"
  spacing={3}
  sx={{
    
    justifyContent: "left",
    alignItems: "flex-start",
    width: "430px",
    flexWrap: "wrap"
  }}
>
  {skills.length>0?skills.map(item=>(<div className='col'><h6 style={{marginBottom:"5px",marginLeft:0}}>{item}</h6></div>)):"Skills"}
  {/* <h6>HTML</h6><h6>Javascript</h6><h6>ReactJs</h6><h6>NodeJs</h6><h6>MongoDB</h6><h6>Python</h6><h6>Java</h6> */}
</Stack>
     


</Stack>


      </Paper>
       


    </Box>
    </div>
  )
}

export default Preview
