import React from "react";
import LandingPage from "./pages/LandingPage";
import SerMujerTotalitarismos from "./pages/SerMujerTotalitarismos";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

function AppContent() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen animated-gradient">
      {/* <Navbar /> */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/ser-mujer-totalitarismos"
            element={<SerMujerTotalitarismos />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer isTransparent={isLandingPage} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-7xl mb-4">404</h1>
      <h2 className="text-xl">Página no encontrada</h2>
    </div>
  );
}
