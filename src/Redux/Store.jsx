import { configureStore } from "@reduxjs/toolkit";
import darkmodeReducer from './Theme/darkModeSlice';
import userReducer from './Users/UsersSlice';

const Store = configureStore({
    reducer:{
        darkMode: darkmodeReducer,
        users: userReducer
    }
})

export default Store;