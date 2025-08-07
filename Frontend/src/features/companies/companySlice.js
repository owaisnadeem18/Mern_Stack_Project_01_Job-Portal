import { createSlice } from "@reduxjs/toolkit";

export const companySlice = createSlice({
    name: "company",
    initialState: {
        singleCompany: null ,
        companies: [],
        companyFilterText: "" 
    },
    reducers: {

        // Actions:
        setSingleCompany: (state , action) => {
            state.singleCompany = action.payload
        },
        setCompanies: (state , action) => {
            state.companies = action.payload
        },  
        setCompanyFilterText: (state , action) => {
            state.companyFilterText = action.payload
        }
    
    }
})

export const {setSingleCompany , setCompanies , setCompanyFilterText} = companySlice.actions
export default companySlice.reducer;