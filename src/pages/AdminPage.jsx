import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  FaWhatsapp as WhatsApp,
  FaInstagram as Instagram,
} from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RiAdminFill as AdminIcon } from "react-icons/ri";

export default function AdminPage() {
  const [isAboutDialogOpen, setIsAboutDialogOpen] = useState(false);

  const talleres = [
    {
      title: "Ser Mujer bajo los Totalitarismos",
      description:
        "Análisis del rol de la mujer en regímenes totalitarios de Europa.",
      icon: "🕯️",
      link: "/editor-de-talleres",
    },
    {
      title: "Historia del Arte Contemporáneo",
      description: "Próximamente...",
      icon: "🎨",
    },
    {
      title: "Cine e Historia",
      description: "Próximamente...",
      icon: "🎬",
    },
    {
      title: "Historia de América Latina",
      description: "Próximamente...",
      icon: "🌎",
    },
  ];

  const handleButtonClick = (title) => {
    if (title === "WhatsApp") {
      window.open(`https://wa.me/5491158512939`, "_blank");
    } else if (title === "Instagram") {
      window.open(`https://www.instagram.com/historiarteconale`, "_blank");
    }
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">Admin page</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Dashboard para cambiar datos de la página web
          </p>
        </header>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl">
            <section className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
              <AdminIcon
                alt="ícono"
                className="rounded-lg  w-full h-48 object-cover mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">Información</h2>
              <p className="mb-4">
                Entra a un taller y luego edita cualquiera de ellos o cambia los
                detalles de la parte inferior de la página.
              </p>
              <p>
                También podés cambiar la información de contacto usando los
                botones debajo.
              </p>
              <Dialog
                open={isAboutDialogOpen}
                onOpenChange={setIsAboutDialogOpen}
              >
                <DialogTrigger asChild>
                  <Button
                    variant="link"
                    className="p-0 h-auto font-semibold text-blue-600"
                  >
                    Más información
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Sobre Alejandra Marcelli</DialogTitle>
                    <DialogDescription>
                      <p className="mb-4">
                        Soy Ale Marcelli, una apasionada por la Historia y la
                        Cultura. Mi misión es transmitir mi amor por la
                        Historia, la cultura y el arte, en sus distintas
                        expresiones, desde una perspectiva de pensamiento
                        crítico.
                      </p>
                      <p className="mb-4">
                        Amo viajar y conectar con nuevas experiencias de vida,
                        sitios, personas, vivencias, costumbres... y así,
                        reconocer y valorar la riqueza de la diversidad
                        cultural.
                      </p>
                      <p className="mb-4">
                        Te propongo iniciar un fascinante viaje, a través del
                        tiempo y del espacio, con una mirada que te inspirará, y
                        te permitirá ampliar tus conocimientos y lograr un
                        entendimiento más profundo y empático, de los procesos
                        histórico-culturales.
                      </p>
                      <p className="mb-4">
                        Te invito a descubrir la Historia, desde otra
                        perspectiva!
                      </p>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <div className="flex space-x-4 mt-4">
                <Button
                  onClick={() => {
                    handleButtonClick("WhatsApp");
                  }}
                  variant="outline"
                  className="flex-1 justify-center"
                >
                  <WhatsApp className="text-xl mr-2" /> Editar WhatsApp
                </Button>
                <Button
                  onClick={() => {
                    handleButtonClick("Instagram");
                  }}
                  variant="outline"
                  className="flex-1 justify-center"
                >
                  <Instagram className="text-xl mr-2" /> Editar Instagram
                </Button>
              </div>
            </section>

            <section className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Mis Talleres</h2>
              <ul className="space-y-4">
                {talleres.map((taller, index) => (
                  <li key={index}>
                    {taller.link ? (
                      <Link to={taller.link} className="flex">
                        <Button
                          variant="outline"
                          className="flex h-20 w-full text-left justify-between group hover:bg-gray-100"
                        >
                          <div className="flex items-center">
                            <span className="text-2xl mr-3">{taller.icon}</span>
                            <div>
                              <span className="font-semibold">
                                {taller.title}
                              </span>
                              <p className="text-sm text-wrap text-gray-600">
                                {taller.description}
                              </p>
                            </div>
                          </div>
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        variant="outline"
                        className="flex h-20 w-full text-left justify-between"
                        disabled
                      >
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{taller.icon}</span>
                          <div>
                            <span className="font-semibold">
                              {taller.title}
                            </span>
                            <p className="text-sm text-gray-600">
                              {taller.description}
                            </p>
                          </div>
                        </div>
                      </Button>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
