import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "./productService";



export const getAllProducts=createAsyncThunk("product/get",async (data,thunkAPI)=>{
    try{
        return await productService.getProducts(data)
       
    }catch(errors){
        return thunkAPI.rejectWithValue(errors)
    }
})

export const getAProduct=createAsyncThunk("product/getAProduct",async (id,thunkAPI)=>{
    try{
        return await productService.getSingleProduct(id)
    }catch(errors){
        return thunkAPI.rejectWithValue(errors)
    }
})








const productState={
    product:"",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}


export const productSlice=createSlice({
    name:"product",
    initialState:productState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllProducts.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getAllProducts.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.product=action.payload;
        }).addCase(getAllProducts.rejected,(state,action)=>{
            state.isError=true;
            state.isLoading=false;
            state.isSuccess=false;
            state.message=action.error
        }).addCase(getAProduct.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getAProduct.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.singleproduct=action.payload;
            state.message="Product Fetched Successfully";
           
        }).addCase(getAProduct.rejected,(state,action)=>{
            state.isError=true;
            state.isLoading=false;
            state.isSuccess=false;
            state.message=action.error
        })
       
    }
})

export default productSlice.reducer;
