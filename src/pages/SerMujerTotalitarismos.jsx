"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Calendar, Clock, MapPin } from "lucide-react";

const talleres = [
  {
    title: "Democracia y Totalitarismo",
    image: "public/Taller_1.jpg",
    description:
      "Análisis comparativo entre sistemas democráticos y totalitarios.",
  },
  {
    title: "Ser Mujer en la Italia fascista",
    image: "public/Taller_2.jpg",
    description:
      "Exploración del rol de la mujer durante el régimen fascista de Mussolini.",
  },
  {
    title: "Ser Mujer en la Alemania Nazi",
    image: "public/Taller_3.jpg",
    description:
      "Análisis de la situación de las mujeres bajo el Tercer Reich.",
  },
  {
    title: "Ser Mujer bajo el Franquismo español",
    image: "public/Taller_4.jpg",
    description:
      "Estudio de la vida de las mujeres durante la dictadura de Franco.",
  },
  {
    title: "Ser Mujer en la Francia de Vichy",
    image: "public/Taller_5.jpg",
    description: "Exploración de la situación femenina en la Francia ocupada.",
  },
  {
    title: "Ser Mujer en la URSS",
    image: "public/Taller_6.jpg",
    description:
      "Análisis del papel de la mujer en la Unión Soviética bajo Stalin.",
  },
];

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

export default function SerMujerTotalitarismos() {
  const [selectedTaller, setSelectedTaller] = useState(null);

  const handleWhatsAppClick = (title) => {
    const message = encodeURIComponent(
      `Hola, me gustaría obtener más información sobre el taller "${title}"`
    );
    window.open(`https://wa.me/5491158512939?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="bg-black text-white py-2 px-4 text-center text-sm">
        "Quien controla el pasado controla el futuro. Quien controla el presente
        controla el pasado." - George Orwell
      </div>
      <header className="bg-gradient-to-r from-red-800 to-gray-900 text-white py-20 relative overflow-hidden">
        <Embers />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">
            Ser Mujer bajo los Totalitarismos
          </h1>
          <p className="text-xl max-w-2xl">
            Un viaje por la historia para entender y resistir la opresión
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {talleres.map((taller, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedTaller(taller)}
            >
              <CardContent className="p-0">
                <img
                  src={taller.image}
                  alt={taller.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h3 className="text-lg font-semibold p-4">{taller.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <footer className="bg-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Detalles del Taller
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Calendar className="mr-2 text-red-600" /> Tres encuentros:
                  jueves 15, 22 y 29 de agosto
                </li>
                <li className="flex items-center">
                  <Clock className="mr-2 text-red-600" /> 18:00 hs
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-2 text-red-600" /> Zona Olivos
                  (presencial)
                </li>
                <li className="flex items-center">
                  <Calendar className="mr-2 text-red-600" /> Cine-debate: jueves
                  5 de septiembre
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                ¿Qué vas a aprender?
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Surgimiento de regímenes totalitarios en la Europa de
                  posguerra
                </li>
                <li>
                  Análisis de casos: Italia fascista, Alemania nazi y España
                  franquista
                </li>
                <li>El rol asignado a las mujeres y su instrumentalización</li>
                <li>
                  Resistencia y empoderamiento femenino en contextos opresivos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <Dialog
        open={!!selectedTaller}
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
          <Button
            onClick={() => handleWhatsAppClick(selectedTaller?.title)}
            className="w-full mt-4"
          >
            Solicitar más información
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
