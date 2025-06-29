import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({

    // createSlice function has three functionalities: 

    // 1. Create the key (name) which acts as the key in redux

    name : "auth" ,
    
    // 2. It creates the initial state of redux , which will get updated when you required
    
    initialState: {
        loading: false
    },

    // 3. It will create the reducer , which will be updated: 

    reducers: {
      setLoading: (state , action) => {
        state.loading = action.payload  
      }  
    }

})

export const {setLoading} = authSlice.actions
export default authSlice.reducer 
