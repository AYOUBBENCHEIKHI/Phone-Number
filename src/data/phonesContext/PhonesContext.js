import axios from 'axios'
import React, {useEffect, useState } from 'react'
import authHeader from '../../components/service/Header-service'
import {toast} from 'react-hot-toast'
export const PhoneContext = React.createContext()

export const PhoneProvider = ({children}) => {
    const user = JSON.parse(localStorage.getItem("user"))
    const [phones,setPhones] = useState([])
    const getPhones = async()=>{
        
        try{
            const {data} =await axios.get("http://localhost:8000/api/users/" + user.id_user,
            {
                headers : authHeader()
            })
            setPhones(data)
            toast.success("phones")
        }
        catch(e){
            toast.error("not phones")
        }
    }
    useEffect(()=>{
        getPhones()
   },[])
    return (
        <PhoneContext.Provider value={{
            phones
        }}>
            {children}
        </PhoneContext.Provider>
    )

}