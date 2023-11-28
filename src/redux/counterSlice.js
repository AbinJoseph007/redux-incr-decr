import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name:"counterApp",
    initialState:{
        value:0
    },
    // actionsare created inside this reducers key
    reducers:{
        
        // logic to update state
          
        // function to increment function
        increment:(state ,action)=>{
            state.value +=action.payload
        },
        // function to decrement number
        decrement:(state ,action)=>{
            state.value -=action.payload
        },
        // function to reset 
        reset:(state)=>{
            state.value = 0
        }

    }
})

// actions is required by components to update state
export  const {increment,decrement,reset}= counterSlice.actions

// reducer is require to store to change the state value
export default counterSlice.reducer