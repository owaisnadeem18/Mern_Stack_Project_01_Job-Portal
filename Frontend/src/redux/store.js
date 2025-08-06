import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice"
import storage from "redux-persist/lib/storage"
import { persistReducer , persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import { jobSlice } from "@/features/jobs/jobSlice";
import companyReducer from "@/features/companies/companySlice"

const rootReducer = combineReducers({
    auth: authSlice,
    job: jobSlice.reducer ,
    company: companyReducer
  })

const persistConfig = {
    key: "root",
    storage,
    version: 1
}

const persistedReducer = persistReducer(persistConfig , rootReducer)

export const store = configureStore({
    reducer: persistedReducer , 
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
  }) // thunk ko add kar rahe ho
})

export const persistor = persistStore(store)