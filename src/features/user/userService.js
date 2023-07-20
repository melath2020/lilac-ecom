import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const register=async(userData)=>{
    const responce=await axios.post(`${base_url}user/register`,userData);
        return responce.data
    
}

export const authService={
    register,
  
}