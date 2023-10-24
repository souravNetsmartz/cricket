import { ThemeProvider } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { store } from "./feature/store";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import ROUTES from "./utils/routes";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={{}}>
        <Router />
      </ThemeProvider>
    </Provider>
  );
}

export default App;

function Router(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home} element={<Dashboard />} />
        <Route path={ROUTES.login} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
