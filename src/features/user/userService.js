import axios from "axios";
import { base_url ,config} from "../../utils/axiosConfig";

const register=async(userData)=>{
    const responce=await axios.post(`${base_url}user/register`,userData);
    if(responce.data){
        return responce.data
    }
    
}

const login=async(userData)=>{
    const responce=await axios.post(`${base_url}user/login`,userData);
    if(responce.data){
        localStorage.setItem('customer',JSON.stringify(responce.data))
        if(responce.data){
            return responce.data
        }
    }
}

const addToCart=async(cartData)=>{
    const responce=await axios.post(`${base_url}user/cart`,cartData,config);
    if(responce.data){
        return responce.data
    }
}

const getCart=async()=>{
    const responce=await axios.get(`${base_url}user/cart`,config);
    if(responce.data){
        return responce.data
    }
}

export const authService={
    register,
    login,
    addToCart,
    getCart
  
}