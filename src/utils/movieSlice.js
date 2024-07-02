import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null
    },
    reducers:{
        addNowPLayingMovies:(state, action) =>{
            state.nowPlayingMovies = action.payload
        }
    }
})
export const {addNowPLayingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;