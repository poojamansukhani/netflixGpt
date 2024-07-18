import { render, screen, waitFor, act } from '@testing-library/react';
import { getAuth } from 'firebase/auth';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
jest.mock('firebase/auth', ()=>{
    getAuth:jest.fn(()=>{})
})
jest.mock('../components/Login', ()=>()=><div>Login</div>);
jest.mock('../components/Browse', ()=>()=><div>Browse</div>);
//screen.logTestingPlaygroundURL();
describe('Body Component', () => {
    afterEach(() => {
        jest.clearAllMocks();
      });
      //debugger;
    const appRouter = createMemoryRouter([
        {
            path:'/',
            element:<div>Login Component</div>
        },
        {
            path:'/browse',
            element:<div>Browse Component</div>
        }
    ])
  it('should render Login component', () => {
    render(
        <RouterProvider router={appRouter}></RouterProvider>
    );
    expect(screen.getByText('Login Component')).toBeInTheDocument();
  });
  it('should render Browse component',  async() => {
    render(
        <RouterProvider router={appRouter}></RouterProvider>
    );
    await act(async()=>{
        appRouter.navigate('./browse')
    })
    
    
    await waitFor(()=>{
        expect(screen.getByText('Browse Component')).toBeInTheDocument();
    })
  });
});