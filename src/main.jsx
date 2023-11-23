import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./utils/appStroe.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ChakraBaseProvider>
      <App />
    </ChakraBaseProvider>
  </Provider>
);
