import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Instagram,
  ExternalLink,
  Book,
  Users,
  Film,
} from "lucide-react";

export default function LandingPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email enviado:", email);
    setEmail("");
    alert("¡Gracias por tu interés! Te vamos a contactar pronto.");
  };

  return (
    <div className="min-h-screen text-gray-900 animated-gradient">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">
            Alejandra Marcelli
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Historiadora, Profesora y Divulgadora Cultural
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <section className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/historiarteconale_1713806827_3351977075106977975_65589994857-MJDqjOQuKxiscFi8JeRw0Fi6r60TBV.webp"
              alt="Alejandra Marcelli en Egipto"
              className="rounded-lg shadow-md w-full h-48 object-cover mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Sobre mí</h2>
            <p className="mb-4">
              Soy Ale Marcelli, una apasionada de la Historia y la Cultura. Mi
              misión es compartir mi amor por la Historia y el Arte en todas sus
              formas.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+5491158512939"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Phone className="mr-2" /> 11 5851 2939
              </a>
              <a
                href="https://www.instagram.com/historiarteconale"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Instagram className="mr-2" /> @historiarteconale
              </a>
            </div>
          </section>

          <section className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Mis Talleres</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold flex items-center">
                  <Book className="mr-2 text-blue-600" /> Ser Mujer bajo los
                  Totalitarismos
                </h3>
                <p className="text-sm mt-1">
                  Análisis del rol de la mujer en regímenes totalitarios de
                  Europa.
                </p>
              </li>
              <li>
                <h3 className="font-semibold flex items-center">
                  <Users className="mr-2 text-green-600" /> Historia del Arte
                  Contemporáneo
                </h3>
                <p className="text-sm mt-1">
                  Recorrido por los movimientos artísticos del siglo XX y XXI.
                </p>
              </li>
              <li>
                <h3 className="font-semibold flex items-center">
                  <Film className="mr-2 text-purple-600" /> Cine e Historia
                </h3>
                <p className="text-sm mt-1">
                  Análisis de películas históricas y su contexto.
                </p>
              </li>
            </ul>
          </section>

          <section className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Próximo Taller</h2>
              <h3 className="font-semibold mb-2">
                Ser Mujer bajo los Totalitarismos
              </h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <Calendar className="mr-2 text-blue-600" /> Tres encuentros:
                  jueves 15, 22 y 29 de agosto
                </li>
                <li className="flex items-center">
                  <Clock className="mr-2 text-blue-600" /> 18:00 hs
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-2 text-blue-600" /> Zona Olivos
                  (presencial)
                </li>
                <li className="flex items-center">
                  <Calendar className="mr-2 text-blue-600" /> Cine-debate:
                  jueves 5 de septiembre
                </li>
              </ul>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Inscribirme
              </Button>
            </form>
          </section>
        </div>

        <footer className="text-center">
          <p className="mb-4">
            &copy; 2024 Alejandra Marcelli. Todos los derechos reservados.
          </p>
          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center"
          >
            Más información sobre mis talleres
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </footer>
      </div>
    </div>
  );
}
