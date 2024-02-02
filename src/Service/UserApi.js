import { userInstance } from "../Axios/axiosInstance";

export const UserSignup = (values) => {
  return userInstance
    .post("/signup", { ...values })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

//userlogin//
export const UserLogin = async (values) => {
  const { email, password } = values;

  try {
    const response = await userInstance.post("/login", { email, password });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//complaint register//
export const Complaint = async (formData, userId) => {
  console.log(formData,"++++000");
  try {
    const response = await userInstance.post(`/complaintregister/${userId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response.data);           
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//add birthcertificate details//
export const BirthCertificate = (values,userDetails) => {
  
  return userInstance.post("/birthcertificateform", {...values,userId:{_id:userDetails._id}});
};
//add deathcertificate details//
export const DeathCertificate = (values,userDetails) => {
  return userInstance.post("/deathcertificateform", {...values,userId:{_id:userDetails._id}} );
};

//add marriagecertificate details//
export const MarriageCertificate = (values,userDetails) => {
  return userInstance.post("/marriagecertificateform", {...values,userId:{_id:userDetails._id}} );
};

//get birth certificate info//
export const GetBirthCertificate = () => {
  return userInstance.get("/");
};
//get death certificate info//
export const GetDeathCertificate = () => {
  return userInstance.get("/deathcertificatehome");
};
//get marriage certificate info//
export const GetMarriageCertificate = () => {
  return userInstance.get("/marriagecertificatehome");
};

//get harithakeralam info//
export const getHarithakeralamInfo = () => {
  return userInstance.get("/harithakeralam");
};

//get impactkerala info//
export const getImpactKeralaInfo = () => {
  return userInstance.get("/impactkerala");
};
//get vathilpadisevanam info//
export const getVathilpadiSevanamInfo = () => {
  return userInstance.get("/vathilpadisevanam");
};
//get keralasolid info//
export const getKeralaSolidInfo = () => {
  return userInstance.get("/keralasolid");
};

//get userdetails//
export const getUserInfo = async () => {
  try {
    const res = await userInstance.get("/header");
    

    // Assuming the user details are in the response data
    return res.data;
  } catch (error) {
    console.error("Error fetching user info:", error);
    throw error; // Propagate the error to handle it in the component
  }
};

