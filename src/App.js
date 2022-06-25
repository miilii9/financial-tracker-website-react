import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import React from "react";
import { useAuthContext } from "./hooks/useAuthContext";

// components and styles
import NavBar from "./Components/NavBar/NavBar";
import SignUp from "./Pages/SignUp/SignUp";
import LogIn from "./Pages/LogIn/LogIn";
import Home from "./Pages/Home/Home";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className='App'>
      {authIsReady && (
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' index element={user ? <Home /> : <LogIn />} />
            <Route
              path='home'
              name='home'
              element={user ? <Home /> : <LogIn />}
            />
            <Route
              path='signup'
              name='signup'
              element={!user ? <SignUp /> : <Home />}
            />
            <Route
              path='login'
              name='login'
              element={!user ? <LogIn /> : <Home />}
            />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
