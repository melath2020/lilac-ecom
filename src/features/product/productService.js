import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";



const getProducts=async(data)=>{
     console.log(data)
    const responce=await axios.get(`${base_url}product/`);
    if(responce.data){
        return responce.data
    }
}

const getSingleProduct=async(id)=>{
    const responce=await axios.get(`${base_url}product/${id}`);
    if(responce.data){
        return responce.data
    }
}



export const productService={
    getProducts,
    getSingleProduct,
  
}