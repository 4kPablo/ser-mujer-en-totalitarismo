import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../src/firebase.js";

export const getTalleres = async () => {
  const talleresSnapshot = await getDocs(collection(db, "talleres"));
  return talleresSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// export const talleres = [
//   {
//     title: "Ser mujer en totalitarismos",
//     image: "/Taller_1.jpg",
//     description:
//       "Un viaje por la historia para entender y resistir la opresión",
//     subtalleres: [
//       {
//         title: "Democracia y Totalitarismo",
//         image: "/Taller_1.jpg",
//         description:
//           "Análisis comparativo entre sistemas democráticos y totalitarios.",
//       },
//       {
//         title: "Ser Mujer en la Italia fascista",
//         image: "/Taller_2.jpg",
//         description:
//           "Exploración del rol de la mujer durante el régimen fascista de Mussolini.",
//       },
//       {
//         title: "Ser Mujer en la Alemania Nazi",
//         image: "/Taller_3.jpg",
//         description:
//           "Análisis de la situación de las mujeres bajo el Tercer Reich.",
//       },
//       {
//         title: "Ser Mujer bajo el Franquismo español",
//         image: "/Taller_4.jpg",
//         description:
//           "Estudio de la vida de las mujeres durante la dictadura de Franco.",
//       },
//       {
//         title: "Ser Mujer en la Francia de Vichy",
//         image: "/Taller_5.jpg",
//         description:
//           "Exploración de la situación femenina en la Francia ocupada.",
//       },
//       {
//         title: "Ser Mujer en la URSS",
//         image: "/Taller_6.jpg",
//         description:
//           "Análisis del papel de la mujer en la Unión Soviética bajo Stalin.",
//       },
//     ],
//     detalles: {
//       date: "Tres encuentros: jueves 15, 22 y 29 de agosto",
//       time: "18:00 hs",
//       location: "Zona Olivos (presencial)",
//       aprendizaje: [
//         "Surgimiento de regímenes totalitarios en la Europa de posguerra",
//         "Análisis de casos: Italia fascista, Alemania nazi y España franquista",
//         "El rol asignado a las mujeres y su instrumentalización",
//         "Resistencia y empoderamiento femenino en contextos opresivos",
//       ],
//     },
//   },
//   {},
//   {},
//   {},
// ];

// export const uploadTalleres = async () => {
//   try {
//     const collectionRef = collection(db, "talleres");
//     for (const taller of talleres) {
//       await addDoc(collectionRef, taller);
//     }
//     console.log("Talleres subidos con éxito!");
//   } catch (error) {
//     console.error("Error subiendo talleres: ", error);
//   }
// };
