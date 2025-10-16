import commonAPI from "./commonAPI"
import { serverURL } from "./serverURL"

//step1: Add resume details to the server(/resume)-post-reqBody - its called by Steps.jsx component

export const addResumeAPI=async(resumeData)=>{
    return await commonAPI('POST',`${serverURL}/resumes`,resumeData)
}

//step2: Add resume details to the server(/history)-post-reqBody- its called by preview.jsx component
export const addHistoryAPI=async(resumeData)=>{
    return await commonAPI('POST',`${serverURL}/history`,resumeData)
}



//step3: Get resume details to the server(/history)-GET- Its called by history.jsx component
export const getHistoryAPI=async()=>{
    return await commonAPI('GET',`${serverURL}/history`,{})
}


//step4: Delete resume details to the server(/history)-DELETE- Its called by history.jsx component
//In Delete , we need to set "id" for delete one by one
export const deleteHistoryAPI=async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}


// TO Edit

//step5: Get perticular resume details to the server(/history)-GET- Its called by edit in  preview.jsx component
export const getResumeHistoryAPI=async(id)=>{
    return await commonAPI('GET',`${serverURL}/history/${id}`,{})
}

// updateAPI based on data from Edit
export const updateHistoryAPI=async(id,editData)=>{
    return await commonAPI('PUT',`${serverURL}/history/${id}`,editData)
}
