import { createSlice } from "@reduxjs/toolkit";

export const jobSlice = createSlice({

    name: "job",
    initialState: {
        allJobs: [],
        singleJob: null , 
        allAdminJobs : [],
        filterJobsByText: "",
        allAppliedJobs: [] , 
        singleAdminJob: [] , 
        searchQuery: "" 
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
            
        },
        setFilterJobsByText: (state , action) => {
            state.filterJobsByText = action.payload 
        } , 
        setAllAppliedJobs : (state , action) => {
            state.allAppliedJobs = action.payload
            
            console.log(state.allAppliedJobs , " - all applied jobs")
        
        },
        setSearchQuery: (state , action) => {
            state.searchQuery = action.payload
        } ,
        setSingleAdminJob: (state, action) => {
            state.singleAdminJob = action.payload
        }
    }
})

export const {setAllJobs , setSingleJob , setAllAdminJobs , setFilterJobsByText , setAllAppliedJobs , setSingleAdminJob , setSearchQuery} = jobSlice.actions
export default jobSlice.reducer