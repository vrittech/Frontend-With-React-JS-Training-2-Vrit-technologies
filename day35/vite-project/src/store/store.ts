import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../components/Counter/counterSlice';
import loginSlice from '../pages/LoginPage/loginSlice';

export const store = configureStore({
    reducer: {
        counterReducer,
        loginSlice
    }
})