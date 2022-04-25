import React from "react";
import {useSelector} from "react-redux";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoutes from "./components/ProtectedRoutes";
import {AppContextProvider} from "./context/appContext";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {selectUser} from "./redux/features/userSlice";

const Router = () => {
  const user = useSelector(selectUser());
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="chat" element={<Chat />} />
          </Route>
          {!user && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default Router;
