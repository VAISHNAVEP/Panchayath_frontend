import { adminInstance } from "../Axios/axiosInstance";
export const Adminlogin = async (values) => {
  const { email, password } = values;
console.log(values,"&&&&");
  try {
    const response = await adminInstance.post("/adminlogin",{email,password});
    console.log(response.data,"))))");
    return response.data; 
  } catch (error) {
    console.error(error);
    throw error;
  }
};
//get userdata//  
export const GetUser=()=>{
  return adminInstance.get('/')
} 

//add certificate details//
export const addCertificate = (values) => {
  return adminInstance.post('/certificate', values);
};

//add project details to userhome//
export const ProjectDetails = (formData) => {
  return adminInstance.post("/adminproject", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  .then((response) => {
    console.log(response.data); 
    return response.data; 
  })
  .catch((error) => {
    console.error(error);
    throw error; 
  });
};

//post razorpay bill amount//
export const BillAmount = (values) => {
  return adminInstance.post("/billing", values);
};

//get birthcertificate details//
export const GetBirthCertificateDetails=()=>{
  return adminInstance.get('/usercertificates')
} 

 //get complaint details//
 export const ComplaintData=()=>{
  return adminInstance.get('/complainthome')
} 
