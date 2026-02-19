import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    darkMode: "dark"
}

const darkModeSlice = createSlice({
    name:"darkMode",
    initialState,
    reducers:{
        setDarkMode:(state)=>{
            state.darkMode = "dark"
        },
        setLightMode:(state)=>{
            state.darkMode = "light"
        },
        setTheme:(state, action) =>{
            state.darkMode = action.payload
        }
    }
});

export default darkModeSlice.reducer

export const {setDarkMode,setLightMode,setTheme} = darkModeSlice.actions