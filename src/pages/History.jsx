import React, { useState } from 'react'
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPIs';
import { useEffect } from 'react';
import { Paper, Stack } from '@mui/material';
import { MdDelete } from "react-icons/md";



function History() {

const [resume, setResume] = useState([]);

const getHistory = async () => {
  try {
    const response = await getHistoryAPI()
    console.log(response);
    setResume(response.data); 
   
  } catch (error) {
    console.log("Error " + error);
  }
};

  useEffect(()=>{
    getHistory();
  },[])

const deleteHistory = async(id)=>{
  alert("You want to delete")
  const response = await deleteHistoryAPI(id)
  console.log(response);
  getHistory();
  
}

  return (
    <div style={{marginBottom:"10px"}}>
      <h4>Downloaded Resume Details</h4>
      <div className="row d-flex">
  {resume.length > 0 ? (
    resume.map((item) => (
      <div className="col">
  <Stack spacing={0} alignItems="center">
    
    <Stack 
      direction="row" 
      justifyContent="space-between" 
      alignItems="center" 
      sx={{ width: "100%", maxWidth: 400 }}
    >
      <h6 style={{ marginTop:"20px", color: "#333" }}>
        Downloaded at {item.currentDATE}
      </h6>

      <button 
      // here ()=> is used because the argument have parameter - id
        onClick={() => deleteHistory(item.id)} 
        style={{
          border: "none",
          background: "transparent",
          cursor: "pointer",
          color: "#d32f2f",
          fontSize: "22px",
          marginTop:"20px"
        }}
      >
        <MdDelete />
      </button>
    </Stack>

    {/* Image preview */}
    <Paper
      elevation={3}
      sx={{
        border: "1px solid #00ccff83",
        borderRadius: "2px",
        overflow: "hidden",
        width: "100%",
        maxWidth: 400,
       
        marginBottom:"10px"
      }}
    >
      <img
        src={item.imgUrl}
        alt="Resume Preview"
        height={500}
        width="100%"
        style={{
          paddingTop:"30px",
          objectFit: "cover",
          display: "block",
          
        }}
      />
    </Paper>
  </Stack>
</div>

    ))
  ) : (
    <p>History Not Available</p>
  )}
</div>

      
    </div>
  )
}

export default History
