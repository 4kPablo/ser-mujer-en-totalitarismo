import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Calendar, Clock, MapPin, Undo2 } from "lucide-react";
import { talleres } from "../../public/talleres";
import { Link } from "react-router-dom";
import { FaWhatsapp as WhatsApp } from "react-icons/fa";

export default function SerMujer() {
  const [selectedTaller, setSelectedTaller] = useState(null);
  const taller = talleres[0]; // Selecciona el primer taller del array

  const handleWhatsAppClick = (title) => {
    const message = encodeURIComponent(
      `Hola, me gustaría obtener más información sobre el taller "${title}"`
    );
    window.open(`https://wa.me/5491158512939?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-gradient-to-r from-red-800 to-gray-900 text-white py-20 relative overflow-hidden">
        <Embers />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">
            {taller.title}
          </h1>
          <p className="text-xl max-w-2xl">{taller.description}</p>
        </div>
      </header>

      <div className="bg-black">
        <div className="flex container justify-between items-center text-white h-14 py-2 px-1 text-sm">
          <Link to="/" className="hidden lg:flex">
            <Button className="text-gray-500" variant="link">
              <Undo2 className="mr-1 h-4 w-4" />
              Volver
            </Button>
          </Link>

          <p className="absolute left-1/2 transform -translate-x-1/2 text-nowrap">
            "Quien controla el pasado controla el futuro. Quien controla el
            presente controla el pasado." - George Orwell
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {taller.subtalleres.map((subtaller, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedTaller(subtaller)}
            >
              <CardContent className="p-0">
                <img
                  src={subtaller.image}
                  alt={subtaller.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h3 className="text-lg font-semibold p-4">{subtaller.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <footer className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Detalles del Taller
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Calendar className="mr-2 text-red-600" />
                  {taller.detalles.date}
                </li>
                <li className="flex items-center">
                  <Clock className="mr-2 text-red-600" />
                  {taller.detalles.time}
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-2 text-red-600" />
                  {taller.detalles.location}
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                ¿Qué vas a aprender?
              </h3>
              <ul className="list-disc list-inside space-y-2">
                {taller.detalles.aprendizaje.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <Dialog
        open={selectedTaller}
        onOpenChange={() => setSelectedTaller(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedTaller?.title}</DialogTitle>
          </DialogHeader>
          <img
            src={selectedTaller?.image}
            alt={selectedTaller?.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <DialogDescription>{selectedTaller?.description}</DialogDescription>
          <div className="flex flex-col items-center">
            <Button
              onClick={() => handleWhatsAppClick(selectedTaller?.title)}
              className="w-full text-md mt-4"
            >
              <WhatsApp className="mr-1" />
              Solicitar más información
            </Button>
          </div>
        </DialogContent>
      </Dialog>
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
