import { Provider } from "react-redux"
import { server } from "../mocks/server"
import { waitFor } from "@testing-library/react";
describe('render movie data', async()=>{
    render(
        <Provider store={appStore}>
            <App/>
        </Provider>
    )
    await waitFor(()=>{
        expect(screen.getByTestId('app-component').toBeInTheDocument());
        
    })
    it('should show text', ()=>{
        render(
            <Provider store={appStore}>
                <App/>
            </Provider>
        )
        expect(screen.getByText(Hi)).toBeInTheDocument();
    })
})

import { render, screen } from '@testing-library/react';
import App from './App';

