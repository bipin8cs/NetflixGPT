import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice';
const appStore = configureStore({
    reducer: {
        // will have multiple reducers
        user: userReducer
    },
})
export default appStore;

//now proovide the store to the app