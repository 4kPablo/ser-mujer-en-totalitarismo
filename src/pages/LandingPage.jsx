import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Instagram,
  ExternalLink,
} from "lucide-react";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [embers, setEmbers] = useState([]);

  useEffect(() => {
    const createEmber = () => ({
      id: Math.random(),
      left: `${Math.random() * 100}%`,
      size: Math.random() * 5 + 2,
      animationDuration: Math.random() * 3 + 2,
    });

    const initialEmbers = Array(20).fill().map(createEmber);
    setEmbers(initialEmbers);

    const interval = setInterval(() => {
      setEmbers((prevEmbers) => {
        const newEmbers = prevEmbers.filter(() => Math.random() > 0.1);
        return [...newEmbers, createEmber()];
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email enviado:", email);
    setEmail("");
    alert("¡Gracias por tu interés! Te vamos a contactar pronto.");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="bg-black text-white py-2 px-4 text-center text-sm">
        "Quien controla el pasado controla el futuro. Quien controla el presente
        controla el pasado." - George Orwell
      </div>

      <header className="bg-gradient-to-r from-red-800 to-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          {/* <img
            src=""
            alt="Fondo"
            className="w-full h-full object-cover"
          /> */}
        </div>
        <div className="embers-container">
          {embers.map((ember) => (
            <div
              key={ember.id}
              className="ember"
              style={{
                left: ember.left,
                width: `${ember.size}px`,
                height: `${ember.size}px`,
                animationDuration: `${ember.animationDuration}s`,
              }}
            />
          ))}
        </div>
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
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
              <h2 className="text-3xl font-semibold mb-6">
                Alejandra Marcelli
              </h2>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/historiarteconale_1713806827_3351977075106977975_65589994857-MJDqjOQuKxiscFi8JeRw0Fi6r60TBV.webp"
                alt="Alejandra Marcelli en Egipto"
                className="rounded-lg shadow-md mb-6 w-full"
              />
              <p className="mb-4">
                Soy Ale Marcelli, una apasionada de la Historia y la Cultura.
                Con este proyecto quiero compartir mi amor por la Historia y el
                Arte en todas sus formas, la literatura, la música, el cine, la
                pintura.
              </p>
              <p className="mb-4">
                Te propongo iniciar un fascinante viaje a través del tiempo y
                del espacio, con otra mirada y perspectiva, que te van a
                inspirar y enriquecer.
              </p>
              <p>
                Te invito a sumarte a una comunidad de amantes de la Historia y
                la Cultura.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Contacto y Redes</h3>
              <div className="space-y-4">
                <a
                  href="tel:+5491158512939"
                  className="flex items-center text-gray-700 hover:text-red-600 transition-colors"
                >
                  <Phone className="mr-2" /> 11 5851 2939
                </a>
                <a
                  href="https://www.instagram.com/historiarteconale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-red-600 transition-colors"
                >
                  <Instagram className="mr-2" /> @historiarteconale
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h2 className="text-3xl font-semibold mb-6">Sobre el Taller</h2>
              <p className="mb-6">
                Un espacio para fomentar el pensamiento crítico y el debate
                sobre el rol de la mujer en los regímenes totalitarios de la
                Europa de entreguerras.
              </p>
              <ul className="space-y-4 mb-8">
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
              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2">¿Qué vas a aprender?</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Surgimiento de regímenes totalitarios en la Europa de
                    posguerra
                  </li>
                  <li>
                    Análisis de casos: Italia fascista, Alemania nazi y España
                    franquista
                  </li>
                  <li>
                    El rol asignado a las mujeres y su instrumentalización
                  </li>
                  <li>
                    Resistencia y empoderamiento femenino en contextos opresivos
                  </li>
                </ul>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">
                Inscribite al taller
              </h3>
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mb-4"
              />
              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white"
              >
                Quiero participar
              </Button>
            </form>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            &copy; 2023 Taller Ser Mujer bajo los Totalitarismos. Todos los
            derechos reservados.
          </p>
          <a
            href="#"
            className="text-red-400 hover:text-red-300 transition-colors inline-flex items-center"
          >
            Más información sobre nuestros talleres{" "}
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </div>
      </footer>

      {/* <style jsx>{`
        .embers-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }
        .ember {
          position: absolute;
          bottom: -10px;
          background-color: #ff6600;
          border-radius: 50%;
          opacity: 0.7;
          animation: rise linear infinite;
        }
        @keyframes rise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
          100% {
            transform: translateY(-100vh) scale(0);
            opacity: 0;
          }
        }
      `}</style> */}
    </div>
  );
}
