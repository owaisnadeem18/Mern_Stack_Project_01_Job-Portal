import { createSlice } from "@reduxjs/toolkit";

export const jobSlice = createSlice({

    name: "job",
    initialState: {
        allJobs: [],
        singleJob: null , 
        allAdminJobs : [],
        filterJobsByText: ""
    },

    reducers: {
        setAllJobs: (state , action) => {
            state.allJobs = action.payload
        },
        setSingleJob: (state , action) => {
            state.singleJob = action.payload
            
        },
        setAllAdminJobs: (state , action) => {
            state.allAdminJobs = action.payload
            
            console.log(state.allAdminJobs , action.payload)
        },
        setFilterJobsByText: (state , action) => {
            state.filterJobsByText = action.payload 
        }
    }
})

export const {setAllJobs , setSingleJob , setAllAdminJobs , setFilterJobsByText} = jobSlice.actions
export default jobSlice.reducer