import axios from 'axios'
import authHeader from './Header-service'

const API_URL = "http://localhost:8000/api"
const user =JSON.parse(localStorage.getItem("user"))
const getAllPhones = async () =>{
    return axios.get(API_URL+"/phon-numbers",
    {
        headers : authHeader()
    })
}
const AddPhone=async( name,phon,adress,user_id)=>{
    return  axios.post(API_URL + "/phon-numbers",
  {
    name,phon,adress,user_id
  },
   { 
      headers: authHeader() 
  }
   ).then((response)=>{
    console.log(response.data)
   })
}

const getAllPhonesUser = async () =>{
    return  axios.get(API_URL + "/users/" + user.id_user,
    { headers: authHeader() }
    )
}

const getPhonUser = async (id) =>{
    return  axios.get(API_URL +  `/phon-numbers/${id}`,
    { headers: authHeader() }
    )
}
const updatePhoneUser = async (id,data) => {
    return await axios.put(API_URL +  `/phon-numbers/${id}`,data,
     { headers: authHeader() }
     )
  };
  const deletePhoneUser = async (id) => {
     return  await axios.delete(API_URL +  `/phon-numbers/${id}`,
        { headers: authHeader() }
    )
  };
const PhoneService ={
    getAllPhones,
    AddPhone,
    getAllPhonesUser,
    getPhonUser,
    updatePhoneUser,
    deletePhoneUser
}

export default PhoneService