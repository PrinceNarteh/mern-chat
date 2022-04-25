import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Redirect from "./components/Redirect";

import {AppContextProvider} from "./context/appContext";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Router = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="chat" element={<Chat />} />
          </Route>
          <Route element={<Redirect />}>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default Router;
