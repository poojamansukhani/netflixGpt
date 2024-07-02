import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null
    },
    reducers:{
        addNowPLayingMovies:(state, action) =>{
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo:(state, action) =>{
            state.trailerVideo = action.payload
        }
    }
})
export const {addNowPLayingMovies, addTrailerVideo} = moviesSlice.actions;
export default moviesSlice.reducer;