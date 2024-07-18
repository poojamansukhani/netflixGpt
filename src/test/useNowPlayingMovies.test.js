import { renderHook } from "@testing-library/react";
import { useDispatch } from "react-redux"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { addNowPLayingMovies } from "../utils/movieSlice";

jest.mock('react redux', () =>{
    useDispatch: jest.fn();
})
jest.mock('../utils/movieSlice', () => {
    addNowPLayingMovies:jest.mock();
})

global.fetch = jest.mock(()=>{
    Promise.resolve({
        jest:()=> Promise.resolve({results:[
            {
                id: 1, title: 'Movie 1'
            },
            {
                id: 2, title: 'Movie 2'
            }
        ]})
    })
})
describe('useNowPlayingMovies', () => {
    let dispatch;
    beforeEach(()=>{
        dispatch:jest.fn();
        useDispatch.mockReturnValue(dispatch);
    });
    afterEach(()=>{
        jest.clearAllMocks();
    })
    it('should fetch & dispatch now playing movies', async()=>{
        const {result , waitForNextUpdate} = renderHook(()=>useNowPlayingMovies());
        await waitForNextUpdate();
        expect(fetch).toHaveBeenCalledWith(
            'https://api.themoviedb.org/3/movie/now_playing?page=1',
            expect.any(Object)
        );
        expect(addNowPLayingMovies).toHaveBeenCalledWith([{id: 1, title: 'Movie 1'}, {id: 2, title: 'Movie 2'}])
        expect(dispatch).toHaveBeenCalledWith(addNowPLayingMovies([{id: 1, title: 'Movie 1'}, {id: 2, title: 'Movie 2'}]))
    })
})