import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice"
import storage from "redux-persist/lib/storage"
import { persistReducer , persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import jobReducer from "@/features/jobs/jobSlice";
import companyReducer from "@/features/companies/companySlice";
import applicationReducer from "@/features/application/applicationSlice"

const rootReducer = combineReducers({
    auth: authSlice,
    job: jobReducer,
    company: companyReducer,
    application: applicationReducer
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
  }) 
})

export const persistor = persistStore(store)