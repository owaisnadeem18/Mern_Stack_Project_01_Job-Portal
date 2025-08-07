import { createSlice } from "@reduxjs/toolkit";

export const jobSlice = createSlice({

    name: "job",
    initialState: {
        allJobs: [],
        allAdminJobs:[],
        singleJob: null,
        filterJobByText: ""
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
        setFilterJobByText: (state , action) => {
            state.filterJobByText = action.payload
        }
    }
})

export const {setAllJobs , setSingleJob , setAllAdminJobs , setFilterJobByText} = jobSlice.actions
export default jobSlice.reducer