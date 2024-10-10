import React, { useEffect } from "react";
import { uploadTalleres } from "./talleres";

const CargarDatos = () => {
  useEffect(() => {
    uploadTalleres();
  }, []);

  return <div>Cargando datos en Firestore...</div>;
};

export default CargarDatos;
