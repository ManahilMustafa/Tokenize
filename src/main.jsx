import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./App.jsx" // Your LandingPage component
import RegisterPage from "./components/register.jsx" // Your RegisterPage component
import "./index.css" // Your global CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* This route renders your LandingPage */}
        <Route path="/register" element={<RegisterPage />} /> {/* This route renders your RegisterPage */}
        {/* You can add more routes here for other pages */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)