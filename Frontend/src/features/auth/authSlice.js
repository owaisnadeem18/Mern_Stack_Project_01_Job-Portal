import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({

    // createSlice function has three functionalities: 

    // 1. Create the key (name) which acts as the key in redux

    name : "auth" ,
    
    // 2. It creates the initial state of redux , which will get updated when you required
    
    initialState: {
        loading: false,
        user: null
    },

    // 3. It will create the reducer , which will be updated: 

    reducers: {
      setLoading: (state , action) => {
        state.loading = action.payload  
      }, 
      setUser: (state , action) => {
        state.user = action.payload
      }
    }

})

export const {setLoading , setUser} = authSlice.actions
export default authSlice.reducer 
