import "./index.css";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { persistor, store } from "./store.js";
import { PersistGate } from "redux-persist/integration/react";
import Routes from "./routes";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>,
  rootElement
);
