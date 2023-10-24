import { ThemeProvider } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { store } from "./feature/store";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import ROUTES from "./utils/routes";
import theme from "./utils/theme";
import T20 from "./pages/t20";
import ODI from "./pages/ODI";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
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
        <Route path={ROUTES.t20} element={<T20 />} />
        <Route path={ROUTES.odi} element={<ODI />} />
      </Routes>
    </BrowserRouter>
  );
}
