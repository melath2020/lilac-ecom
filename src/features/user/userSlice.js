import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";

export const registerUser=createAsyncThunk("auth/register",async (userData,thunkAPI)=>{
    try{
        return await authService.register(userData)
    }catch(errors){
        return thunkAPI.rejectWithValue(errors)
    }
})

export const loginUser=createAsyncThunk("auth/login",async (userData,thunkAPI)=>{
    try{
        return await authService.login(userData)
    }catch(errors){
        return thunkAPI.rejectWithValue(errors)
    }
})

export const addProdToCart=createAsyncThunk("user/cart/add",async (cartData,thunkAPI)=>{
    console.log(cartData)
    try{
        return await authService.addToCart(cartData)
    }catch(errors){
        return thunkAPI.rejectWithValue(errors)
    }
})

export const getUserCart=createAsyncThunk("user/cart/get",async (thunkAPI)=>{
    try{
        return await authService.getCart()
    }catch(errors){
        return thunkAPI.rejectWithValue(errors)
    }
})

export const deleteCartProduct=createAsyncThunk("user/cart/products/delete",async (id,thunkAPI)=>{
    try{
        return await authService.removeProductFromCart(id)
    }catch(errors){
        return thunkAPI.rejectWithValue(errors)
    }
})

export const updateCartProduct=createAsyncThunk("user/cart/products/update",async (cartDetail,thunkAPI)=>{
    try{
        return await authService.updateProductFromCart(cartDetail)
    }catch(errors){
        return thunkAPI.rejectWithValue(errors)
    }
})

const getCustomerfromLocalStorage=localStorage.getItem('customer')? JSON.parse(localStorage.getItem('customer')):null;
const initialState={
    user:getCustomerfromLocalStorage,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const authSlice=createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(registerUser.pending,(state)=>{
            state.isLoading=true;

        }).addCase(registerUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.createdUser=action.payload;
            if(state.isSuccess===true){
                toast.info("User Created Successfully")
            }
        }).addCase(registerUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError===true){
                toast.error(action.payload.response.data.message)
            }
        }).addCase(loginUser.pending,(state)=>{
            state.isLoading=true;
         
        }).addCase(loginUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.user=action.payload;
            if(state.isSuccess===true){
                localStorage.setItem("token",action.payload.token)
                toast.success("User Logged In Successfully")
            }
        }).addCase(loginUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError===true){
                toast.error(action.payload.response.data.message)
            }
        }).addCase(addProdToCart.pending,(state)=>{
            state.isLoading=true;
           
        }).addCase(addProdToCart.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.cartProduct=action.payload;
            if(state.isSuccess){
                toast.success("Product Added to Cart")
            }
           
        }).addCase(addProdToCart.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            
        }).addCase(getUserCart.pending,(state)=>{
            state.isLoading=true;
           
        }).addCase(getUserCart.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.cartProducts=action.payload;
           
        }).addCase(getUserCart.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            
        }).addCase(deleteCartProduct.pending,(state)=>{
            state.isLoading=true;
           
        }).addCase(deleteCartProduct.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.deletedCartProduct=action.payload;
            if(state.isSuccess){
                toast.success("Product Deleted From Cart Successfully!")
            }
           
        }).addCase(deleteCartProduct.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError){
                toast.error("Something Went Wrong!")
            }
        }).addCase(updateCartProduct.pending,(state)=>{
            state.isLoading=true;
           
        }).addCase(updateCartProduct.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.updatedCartProduct=action.payload;
            if(state.isSuccess){
                toast.success("Product Updated From Cart Successfully!")
            }
           
        }).addCase(updateCartProduct.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError){
                toast.error("Something Went Wrong!")
            }
        })
    }
})


export default authSlice.reducer;