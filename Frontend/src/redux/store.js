// import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "../features/auth/authSlice";

// const store = configureStore({
//     reducer: {
//         auth: authSlice
//     }
// })

// export default store


import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice"

const store = configureStore({
    reducer: {
        auth: authSlice
    }
})

export default store