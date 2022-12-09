import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Router from "./router/Router";
import s from "./pages/Main/style.module.scss";
import "react-ts-modal/css/styles.scss";

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Router />
    </Provider>
  </BrowserRouter>
);

export default App;
