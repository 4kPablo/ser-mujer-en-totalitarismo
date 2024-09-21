import React from "react";
import { ExternalLink } from "lucide-react";

export default function Footer({ isTransparent }) {
  return (
    <footer className={`py-4 ${isTransparent ? "bg-transparent" : "bg-white"}`}>
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">
          &copy; 2024 Alejandra Marcelli. Todos los derechos reservados.
        </p>
        <a
          href="#"
          className="text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center"
        >
          Más información sobre mis talleres
          <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
