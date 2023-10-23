import {Routes, Route, Navigate} from "react-router-dom";
import { useState } from 'react'
import MainPage from "./pages/layout/main-page/MainPage.jsx";
import Layout from "./pages/layout/Layout.jsx";
import Login from "./pages/login/Login.jsx";
import Browse from "./pages/layout/browse/Browse.jsx";

import './App.scss'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("name"));

  return (
    <>
      <Routes>
          <Route path="/" element={<Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}>
              <Route path="/" element={<MainPage />} />
              <Route path="login" element={isLoggedIn ? <Navigate to="/"/> : <Login setIsLoggedIn={setIsLoggedIn} />}  />
              <Route path="browse" element={isLoggedIn ? <Browse /> : <Navigate to="/login"/> }/>
              <Route path="*" element={<h1>404</h1>} />
          </Route>
      </Routes>
    </>
  )
}

export default App
