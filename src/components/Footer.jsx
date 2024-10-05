import React from "react";
import { ExternalLink } from "lucide-react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

export default function Footer({ isTransparent }) {
  const isAdmin =
    (location.pathname === "/admin") |
    (location.pathname === "/editor-de-talleres");
  return (
    <footer className={`py-4 ${isTransparent ? "bg-transparent" : "bg-white"}`}>
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">
          &copy; 2024 Alejandra Marcelli. Todos los derechos reservados.
        </p>
        {isAdmin ? (
          <a
            href="/"
            className="text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center"
          >
            Volver al modo de usuario
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        ) : (
          <a
            href="/admin"
            className="text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center"
          >
            Acceder al modo administrador
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        )}
      </div>
    </footer>
  );
}
