import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
    name: "application" , 
    initialState: {
        applicants: []
    },
    reducers: {
        setAllApplicants: (state , action) => {
        state.applicants = action.payload
        console.log(state.applicants)
    }}
})

export const {setAllApplicants} = applicationSlice.actions
export default applicationSlice.reducer