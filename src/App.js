import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
function App() {
  return (
    <Provider store={appStore}>
      <div data-testid="app-component">
        <h1>Hi</h1>
       <Body/>
      </div>
    </Provider>
  );
}

export default App;
