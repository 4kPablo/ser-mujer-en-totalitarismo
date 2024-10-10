import React from "react";
import LandingPage from "./pages/LandingPage";
import AdminPage from "./pages/AdminPage";
import SerMujer from "./pages/SerMujer";
import TalleresEditor from "./pages/TallerEditor";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
// import CargarDatos from "../public/CargarDatos";
// import Navbar from "./components/Navbar";
import "./globals.css";

function AppContent() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const isAdminPage = location.pathname === "/admin";
  // CargarDatos();

  return (
    <div className="flex flex-col min-h-screen animated-gradient">
      {/* <Navbar /> */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/ser-mujer-totalitarismos" element={<SerMujer />} />
          <Route path="/editor-de-talleres" element={<TalleresEditor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Toaster />
      <Footer isTransparent={isLandingPage | isAdminPage} />
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
