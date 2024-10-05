import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { talleres } from "../../public/talleres";
import { Link } from "react-router-dom";
import {
  Dot,
  Calendar,
  Clock,
  MapPin,
  Save,
  Undo2,
  SquareArrowOutUpRight,
} from "lucide-react";

export default function TalleresEditor() {
  const [talleresData, setTalleresData] = useState(talleres);

  const handleMainTallerChange = (e, field) => {
    const updatedTalleres = [...talleresData];
    updatedTalleres[0] = { ...updatedTalleres[0], [field]: e.target.value };
    setTalleresData(updatedTalleres);
  };

  const handleSubtallerChange = (e, index, field) => {
    const updatedTalleres = [...talleresData];
    updatedTalleres[0].subtalleres[index] = {
      ...updatedTalleres[0].subtalleres[index],
      [field]: e.target.value,
    };
    setTalleresData(updatedTalleres);
  };

  const handleDetallesChange = (e, field) => {
    const updatedTalleres = [...talleresData];
    updatedTalleres[0].detalles = {
      ...updatedTalleres[0].detalles,
      [field]: e.target.value,
    };
    setTalleresData(updatedTalleres);
  };

  const handleAprendizajeChange = (e, index) => {
    const updatedTalleres = [...talleresData];
    updatedTalleres[0].detalles.aprendizaje[index] = e.target.value;
    setTalleresData(updatedTalleres);
  };

  const handleSave = () => {
    console.log("Updated talleres data:", talleresData);
    alert("Cambios guardados (ver consola para detalles)");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-gradient-to-r from-red-800 to-gray-900 text-white py-20 relative overflow-hidden">
        <Embers />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">
            Editor de Talleres
          </h1>
          <p className="text-xl max-w-2xl">
            Modifica los detalles de los talleres y subtalleres
          </p>
        </div>
      </header>

      <div className="bg-black">
        <div className="flex container justify-between items-center text-white h-14 py-2 px-1 text-sm">
          <div className="flex-1">
            <Link to="/admin" className="hidden lg:flex">
              <Button className="text-gray-300" variant="link">
                <Undo2 className="mr-1 h-4 w-4" />
                Volver
              </Button>
            </Link>
          </div>

          <Select>
            <SelectTrigger className="bg-black border-gray-600 border-2 rounded-full text-gray-300 w-64">
              <SelectValue placeholder="Seleccionar taller" />
            </SelectTrigger>
            <SelectContent className="rounded-2xl">
              <SelectItem value="SerMujer">
                Ser Mujer bajo los Totalitarismos
              </SelectItem>
              <SelectItem value="ArteContemporaneo" disabled>
                Historia del Arte Contemporáneo
              </SelectItem>
              <SelectItem value="Cine" disabled>
                Cine e Historia
              </SelectItem>
              <SelectItem value="Latam" disabled>
                Historia de América Latina
              </SelectItem>
            </SelectContent>
          </Select>

          <div className="flex flex-1 justify-end">
            <Link to="/ser-mujer-totalitarismos">
              <Button className="text-gray-300" variant="link">
                Ver página de Ser Mujer
                <SquareArrowOutUpRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Taller Principal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="main-title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Título
                </label>
                <Input
                  id="main-title"
                  value={talleresData[0].title}
                  onChange={(e) => handleMainTallerChange(e, "title")}
                  placeholder="Título del taller principal"
                />
              </div>
              <div>
                <label
                  htmlFor="main-image"
                  className="block text-sm font-medium text-gray-700"
                >
                  Imagen
                </label>
                <Input
                  id="main-image"
                  value={talleresData[0].image}
                  onChange={(e) => handleMainTallerChange(e, "image")}
                  placeholder="URL de la imagen principal"
                />
              </div>
              <div>
                <label
                  htmlFor="main-description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Descripción
                </label>
                <Textarea
                  id="main-description"
                  value={talleresData[0].description}
                  onChange={(e) => handleMainTallerChange(e, "description")}
                  placeholder="Descripción del taller principal"
                  rows={4}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-3xl font-semibold mb-6">Subtalleres</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {talleresData[0].subtalleres.map((subtaller, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>Subtaller {index + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input
                    value={subtaller.title}
                    onChange={(e) => handleSubtallerChange(e, index, "title")}
                    placeholder="Título del subtaller"
                  />
                  <Input
                    value={subtaller.image}
                    onChange={(e) => handleSubtallerChange(e, index, "image")}
                    placeholder="URL de la imagen del subtaller"
                  />
                  <Textarea
                    value={subtaller.description}
                    onChange={(e) =>
                      handleSubtallerChange(e, index, "description")
                    }
                    placeholder="Descripción del subtaller"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="flex gap-6">
          <Card className="mb-8 flex-1">
            <CardHeader>
              <CardTitle className="text-2xl">Detalles del Taller</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="text-red-600" />
                  <Input
                    value={talleresData[0].detalles.date}
                    onChange={(e) => handleDetallesChange(e, "date")}
                    placeholder="Fecha del taller"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="text-red-600" />
                  <Input
                    value={talleresData[0].detalles.time}
                    onChange={(e) => handleDetallesChange(e, "time")}
                    placeholder="Hora del taller"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="text-red-600" />
                  <Input
                    value={talleresData[0].detalles.location}
                    onChange={(e) => handleDetallesChange(e, "location")}
                    placeholder="Ubicación del taller"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 flex-1">
            <CardHeader>
              <CardTitle className="text-2xl">¿Qué vas a aprender?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {talleresData[0].detalles.aprendizaje.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Dot />
                    <Input
                      value={item}
                      onChange={(e) => handleAprendizajeChange(e, index)}
                      placeholder={`Punto de aprendizaje ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
        <div className="flex justify-center w-full">
          <Button onClick={handleSave} className="w-full sm:w-64">
            <Save className="mr-2 h-4 w-4" /> Guardar Cambios
          </Button>
        </div>
      </main>
    </div>
  );
}

function Embers() {
  const [embers, setEmbers] = useState([]);

  useEffect(() => {
    const createEmber = () => ({
      id: Math.random(),
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 10 + 5}px`,
      animationDuration: `${Math.random() * 3 + 2}s`,
    });

    const interval = setInterval(() => {
      setEmbers((prev) => [...prev, createEmber()].slice(-20));
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="embers-container">
      {embers.map((ember) => (
        <div
          key={ember.id}
          className="ember"
          style={{
            left: ember.left,
            width: ember.size,
            height: ember.size,
            animationDuration: ember.animationDuration,
          }}
        />
      ))}
    </div>
  );
}
