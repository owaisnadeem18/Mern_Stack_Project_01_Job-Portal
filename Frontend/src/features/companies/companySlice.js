import { createSlice } from "@reduxjs/toolkit";

export const companySlice = createSlice({
    name: "company",
    initialState: {
        singleCompany: null ,
        companies: []
    },
    reducers: {

        // Actions:
        setSingleCompany: (state , action) => {
            state.singleCompany = action.payload
        },
        setCompanies: (state , action) => {
            state.companies = action.payload
        }  
    
    }
})

export const {setSingleCompany , setCompanies } = companySlice.actions
export default companySlice.reducer;