import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  <nav className="bg-white shadow-md">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Historiarte con Ale
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            Inicio
          </Link>
          <Link to="/talleres" className="text-gray-600 hover:text-gray-800">
            Talleres
          </Link>
          <Link to="/contacto" className="text-gray-600 hover:text-gray-800">
            Contacto
          </Link>
        </div>
      </div>
    </div>
  </nav>;
}
