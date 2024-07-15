import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import appStore from "../utils/appStore"
import App from '../App';
jest.mock('../components/Body', ()=>()=><div>Body</div>)
describe('App Component test', () => {
  test('should render app component', () => {
    render(
      <Provider store={appStore}>
    <App />
    </Provider>
    );
    expect(screen.getByText('Body')).toBeInTheDocument();
  });
});