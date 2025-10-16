import React from "react";
import "./Landingpage.css";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
function Landingpage() {
  return (
    <div>
      <section id="bg-banner">
        <Stack
          direction="row"
          spacing={4}
          sx={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            paddingTop:"140px"
          }}
        >
          <Box sx={{border:"3px solid white",boxShadow:"1px 2px 2px 0px black", borderRadius:"10px" }}>
            
            <h1 style={{margin:"20px"}}>Created to Showcase Your Talent</h1>
            <h2 style={{margin:"20px"}}>
              {" "}
              Showcase your expertise, highlight your achievements, and land
              your dream job with ease.
            </h2>

            <Link to={'/resume'}><Button sx={{marginBottom:"20px"}} variant="contained">Create My Resume</Button></Link>

            
            
          </Box>
        </Stack>
      </section>

      <section>
        <h1 style={{textAlign:"center" , paddingTop:"10px"}}>Tools</h1>
        <Stack
  direction="row"
  spacing={4}
  sx={{
    justifyContent: "center",
    alignItems: "center",
    paddingTop:"5px"
  }}
>
  <Box>
       <Stack
  direction="column"
  spacing={2}
  sx={{
    justifyContent: "center",
  }}
>
  <h2>Resume</h2>
<p>Create unlimited resumes with professional templates and easily edit them anytime.</p>

<h2>Jobs</h2>
<p>Get automatic updates with the latest and most relevant job postings tailored to your skills.</p>

<h2>Templates</h2>
<p>Choose from modern, ATS-friendly designs that make your resume stand out.</p>

<h2>Profile</h2>
<p>Save your details once and reuse them across multiple resumes without retyping.</p>

<h2>Security</h2>
<p>Your data is safe and secure with us, protected by advanced encryption.</p>

    </Stack>
   
</Box>
  <Box>
    <img style={{paddingLeft:"100px"}} src="https://good-resume.com/wp-content/uploads/2017/03/Free-Beautiful-Resume-CV-Design-Template-PSD-File-1.jpg" alt="" height={"500px"} width={"450px"}/>
  </Box>
</Stack>
      </section>
       <section id="bg-banner2">
        
      </section>

      <section>
        <h2 style={{textAlign:"center" , paddingTop:"10px"}}>Testimony</h2>
        <Stack
          direction="row"
          spacing={4}
          sx={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            paddingTop:"50px"
          }}
        >
          <Box sx={{width:"40%",height:"450px"}}>
             <Stack
          direction="column"
          spacing={2}
          sx={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            fontSize:"18px",
            paddingRight:"25px"
          }}
        ><h2>Trusted by Professionals Worldwide</h2>
<p>At LiveCareer, we don’t just help you create resumes — we help you land the job. Whether you’re a seasoned professional or just starting out, our tools are designed to deliver real results.</p>

<p>In fact, users who used LiveCareer reported getting hired an average of 48 days faster — based on a survey of 258 users.</p>

<p>With our intuitive builder, you can create polished, ATS-friendly resumes in minutes. From customizable templates to step-by-step guidance, we make it simple for you to stand out in today’s competitive job market.</p>

<p>Join thousands of job seekers worldwide who trust LiveCareer to showcase their skills and achievements. Start building your future today with a resume that gets noticed by top employers and recruiters.</p>

       </Stack>
   </Box>
           
          <Box sx={{width:"40%",height:"450px" }}>
             
<Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "space-around",
    alignItems: "center",
  }}
>
  <img src="https://media.istockphoto.com/id/1217962587/photo/portrait-of-a-young-confident-smiling-asian-chinese-businessman.jpg?s=612x612&w=0&k=20&c=_2_An_UyM2EiLreTqEj3i8RciDlcSaRdvss6e1ZOqP8=" alt=""  width={"100px"}height={"65px"}/>
    <img src="https://png.pngtree.com/thumb_back/fh260/background/20240702/pngtree-updating-her-professional-business-profile-image_15843406.jpg" alt=""  width={"100px"}height={"65px"}/>
  <img src="https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?semt=ais_incoming&w=740&q=80" alt=""  width={"100px"}height={"65px"}/>
  <img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt=""  width={"100px"}height={"65px"}/>
  <img src="https://wallpapers.com/images/hd/professional-profile-pictures-2880-x-1920-7jvygpai7v9zkg2j.jpg" alt=""  width={"100px"}height={"65px"}/>

</Stack>
<Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "space-around",
    alignItems: "center",
    marginTop:"20px"
  }}
>
  <img src="https://cdn.prod.website-files.com/666ad77562dfabab1eb27f6c/66fbe5aea2e37e10f5fe1c9e_666ad77562dfabab1eb280b1_art-of-professional-headshots%20(1).jpeg" alt=""  width={"100px"}height={"65px"}/>
    <img src="https://sb.kaleidousercontent.com/67418/1920x1282/7978bca0ba/christina-wocintechchat-com-50tkcap8m3a-unsplash.jpg" alt=""  width={"100px"}height={"65px"}/>
  <img src="https://cdn.prod.website-files.com/639ff8596ae419fae300b099/641017314cc67f8921c517a6_good-linkedin-profile-photo-750x500.jpeg" alt=""  width={"100px"} height={"65px"}/>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5NTBNBrHAvaW_hEYgujDAUqbLQ1j0R22ANw&s" alt=""  width={"100px"} height={"65px"}/>
  <img src="https://www.shutterstock.com/image-photo/asian-businesswoman-portrait-isolated-on-600nw-2079816676.jpg" alt=""  width={"100px"}height={"65px"}/>

</Stack>
<Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "space-around",
    alignItems: "center",
     marginTop:"20px"
  }}
>
  <img src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?cs=srgb&dl=pexels-divinetechygirl-1181690.jpg&fm=jpg" alt=""  width={"100px"}height={"65px"}/>
    <img src="https://media.istockphoto.com/id/1354842602/photo/portrait-of-a-young-businesswoman-working-on-a-laptop-in-an-office.jpg?s=612x612&w=0&k=20&c=kfP1g2712RiaxsDriIxFo363ARlaL2D591s-22CnIo8=" alt=""  width={"100px"}height={"65px"}/>
  <img src="https://media.istockphoto.com/id/1303206657/photo/headshot-portrait-of-african-american-male-employee.jpg?s=612x612&w=0&k=20&c=oew57VUqO5zyJf_LfQfPVmmM4PTQEiyzIG3xXzpzyJU=" alt=""  width={"100px"}height={"65px"}/>
  <img src="https://media.istockphoto.com/id/1338134319/photo/portrait-of-young-indian-businesswoman-or-school-teacher-pose-indoors.jpg?s=612x612&w=0&k=20&c=Dw1nKFtnU_Bfm2I3OPQxBmSKe9NtSzux6bHqa9lVZ7A=" alt=""  width={"100px"}height={"65px"}/>
  <img src="https://media.stockimg.ai/designed/szK6NAULTwO2.png?quality=75&width=1024" alt=""  width={"100px"}height={"65px"}/>

</Stack>

<Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "space-around",
    alignItems: "center",
     marginTop:"20px"
  }}
>
  <img src="https://img.freepik.com/free-photo/confident-blonde-young-businesswoman-standing-against-gray-background_23-2148029507.jpg" alt=""  width={"100px"}height={"65px"}/>
    <img src="https://static.vecteezy.com/system/resources/thumbnails/038/974/578/small/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg" alt=""  width={"100px"}height={"65px"}/>
  <img src="https://shotkit.com/wp-content/uploads/2021/06/Cool-profile-picture-Zoom.jpg" alt=""  width={"100px"}height={"65px"}/>
  <img src="https://media.istockphoto.com/id/2194078950/photo/profile-picture-of-smiling-confident-arabic-businessman.jpg?s=612x612&w=0&k=20&c=hFoHVfmAgOET8r1unu8uoPvgwLzaFllpz9jeOdBxSgE=" alt=""  width={"100px"}height={"65px"}/>
  <img src="https://headshots-inc.com/wp-content/uploads/2023/01/linkedin-headshot-tips-for-female-job-seekers-1-1024x683.jpg" alt=""  width={"100px"}height={"65px"}/>

</Stack>
            
          </Box>
        </Stack>
      </section>

      
    </div>
  );
}

export default Landingpage;
