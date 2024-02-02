import axios from "axios";

const userInstance = axios.create({
  baseURL:"http://localhost:3002",
  headers: {
    "Content-Type": "application/json",
  },
});

const adminInstance = axios.create({
  baseURL: `${"http://localhost:3002"}/admin`,
  headers: {
    "Content-Type": "application/json",
  },
});

userInstance.interceptors.request.use((request)=>{
  const token=localStorage.getItem("token")
  request.headers.Authorization=`Bearer ${token}`
  
  
  return request
})
adminInstance.interceptors.request.use((request)=>{
  const admintoken=localStorage.getItem("admintoken");
  console.log("Admin Token in Interceptor:", admintoken);
  request.headers.Authorization=`Bearer ${admintoken}`

return request
})

export { userInstance, adminInstance };
