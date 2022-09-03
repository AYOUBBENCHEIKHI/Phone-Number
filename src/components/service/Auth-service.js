import axios from "axios";
import authHeader from "./Header-service";
const API_URL ="http://localhost:8000/api";
const signup = (name,email,password)=>{
    return axios.post(API_URL+"/users",
    {
        name,email,password
    })
    .then((response)=>{
        if(response.data.token){
            
            //localStorage.setItem("user",JSON.stringify(response.data))
        }
        return response.data
    })
}
const login =(email,password)=>{
    
    return axios.post(API_URL+"/login",
    {
        email,password
    })
    .then((response)=>{
        if(response.data.token){
            localStorage.setItem("user",JSON.stringify(response.data))
        }
        return response.data
    })
}

const logout = async ()=>{
    return await axios.get(API_URL+"/logout",
    {
        headers:authHeader()
    })
    /*.then((response)=>{
        if(response.data.message){
            localStorage.removeItem("user")
            window.location.reload()
        }
        console.log(response.data)
    })
    .catch((error)=>{
        console.log(error)
    })*/
}
const getCurrentUser =()=>{
    return JSON.parse(localStorage.getItem("user"))
}
const AuthService ={
    signup,
    login,
    logout,
    getCurrentUser
}

export default AuthService