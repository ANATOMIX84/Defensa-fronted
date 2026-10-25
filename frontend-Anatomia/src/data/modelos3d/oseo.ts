import type { Sistema } from "./tipos";

export const oseo: Sistema = {
  id: "oseo",
  titulo: "Sistema Óseo",
  resumen: "Cráneo, columna y esqueleto",
  portada: "/portadas/esqueleto.png",
  introduccion:
    "El sistema óseo es el conjunto de huesos que forman el esqueleto. Un adulto tiene 206 huesos. Sostienen el cuerpo, protegen órganos delicados como el encéfalo y el corazón, y junto con los músculos permiten el movimiento.",
  modelos: [
    {
      id: "craneo",
      titulo: "El Cráneo",
      resumen: "Huesos de la cabeza y la cara",
      modelo: "/models/craneo.glb",
      portada: "/portadas/craneo.png",
      orbita: "30deg 85deg 115%",
      objetivo: "auto auto auto",
      queEs:
        "Es la estructura ósea de la cabeza. Tiene dos partes: el neurocráneo, una caja formada por 8 huesos que protege el encéfalo, y el viscerocráneo, los 14 huesos que forman la cara. Casi todos están unidos por suturas que no se mueven. El único hueso móvil es la mandíbula.",
      funciones: [
        "Proteger el encéfalo",
        "Formar las cavidades de los ojos, la nariz y la boca",
        "Sostener los dientes y permitir la masticación",
        "Dar forma a la cara",
      ],
      partes: [
        {
          id: "frontal",
          nombre: "Hueso frontal",
          color: "#e8a0a0",
          descripcion:
            "Forma la frente y el techo de las órbitas de los ojos. Por dentro tiene el seno frontal, una cavidad con aire.",
        },
        {
          id: "parietales",
          nombre: "Huesos parietales",
          color: "#e6c07a",
          descripcion:
            "Son dos y forman la parte superior y los lados del cráneo. Se unen entre sí en la sutura sagital.",
        },
        {
          id: "temporales",
          nombre: "Huesos temporales",
          color: "#9fc48a",
          descripcion:
            "Están a los lados, a la altura de las orejas. Dentro tienen el oído medio y el oído interno, y con la mandíbula forman la articulación que permite abrir la boca.",
        },
        {
          id: "occipital",
          nombre: "Hueso occipital",
          color: "#8fb3d9",
          descripcion:
            "Forma la nuca y la base del cráneo. Tiene un agujero grande, el foramen magno, por donde pasa la médula espinal. Se apoya sobre la primera vértebra (atlas).",
        },
        {
          id: "esfenoides",
          nombre: "Esfenoides",
          color: "#c49bd6",
          descripcion:
            "Tiene forma de murciélago y está en el centro de la base del cráneo. Se une con casi todos los demás huesos del cráneo. En su silla turca se aloja la hipófisis.",
        },
        {
          id: "etmoides",
          nombre: "Etmoides",
          color: "#d79ec4",
          descripcion:
            "Es un hueso pequeño y liviano entre las órbitas. Forma parte del tabique y del techo de la nariz. Por sus agujeros pasan los nervios del olfato.",
        },
        {
          id: "nasales",
          nombre: "Huesos nasales",
          color: "#e3cf6f",
          descripcion:
            "Son dos huesos pequeños que forman el puente de la nariz. El resto de la nariz es cartílago.",
        },
        {
          id: "cigomaticos",
          nombre: "Huesos cigomáticos (pómulos)",
          color: "#7fc8c0",
          descripcion:
            "Forman los pómulos y parte del borde de las órbitas. Se unen con el temporal para formar el arco cigomático.",
        },
        {
          id: "maxilares",
          nombre: "Maxilares",
          color: "#f0a96e",
          descripcion:
            "Son dos huesos que forman la mandíbula superior. Sostienen los dientes de arriba, forman parte del paladar y del piso de las órbitas.",
        },
        {
          id: "mandibula",
          nombre: "Mandíbula",
          color: "#b3a3e0",
          descripcion:
            "Es el hueso más fuerte de la cara y el único del cráneo que se mueve. Sostiene los dientes de abajo y permite masticar y hablar.",
        },
        {
          id: "otros-cara",
          nombre: "Otros huesos de la cara",
          color: "#c7b6a3",
          descripcion:
            "Son huesos pequeños que están por dentro: los lagrimales (en la órbita, junto al conducto de las lágrimas), los palatinos (parte de atrás del paladar), el vómer (tabique nasal) y los cornetes inferiores.",
        },
        {
          id: "dientes",
          nombre: "Dientes",
          color: "#f4f1e6",
          descripcion:
            "Un adulto tiene 32 dientes: incisivos para cortar, caninos para desgarrar, y premolares y molares para triturar. Están encajados en los maxilares y la mandíbula. En el modelo no aparecen las muelas del juicio.",
        },
        {
          id: "huesecillos",
          nombre: "Huesecillos del oído",
          color: "#e05d5d",
          descripcion:
            "El martillo, el yunque y el estribo están dentro del hueso temporal. Transmiten las vibraciones del tímpano al oído interno. El estribo es el hueso más pequeño del cuerpo: mide unos 3 mm.",
        },
      ],
    },
    {
      id: "columna",
      titulo: "La Columna Vertebral",
      resumen: "Vértebras y discos intervertebrales",
      modelo: "/models/columna.glb",
      portada: "/portadas/columna.png",
      orbita: "60deg 85deg auto",
      objetivo: "auto auto auto",
      queEs:
        "Es el eje del cuerpo. Está formada por 33 vértebras apiladas desde el cráneo hasta la pelvis. Vista de lado tiene cuatro curvas que la hacen más resistente. Por dentro forma un canal donde está protegida la médula espinal.",
      funciones: [
        "Sostener el peso de la cabeza y el tronco",
        "Proteger la médula espinal",
        "Permitir doblar y girar el tronco",
        "Servir de anclaje a las costillas y a muchos músculos",
      ],
      partes: [
        {
          id: "atlas-axis",
          nombre: "Atlas y axis (C1 y C2)",
          color: "#e8a0a0",
          descripcion:
            "Son las dos primeras vértebras y tienen una forma especial. El atlas sostiene el cráneo y permite decir «sí» con la cabeza. El axis tiene un diente sobre el que gira el atlas para decir «no».",
        },
        {
          id: "cervicales",
          nombre: "Vértebras cervicales (C3 a C7)",
          color: "#e6c07a",
          descripcion:
            "Junto con el atlas y el axis forman el cuello (7 cervicales en total). Son pequeñas y muy móviles. La C7 se nota al tocar la base del cuello.",
        },
        {
          id: "toracicas",
          nombre: "Vértebras torácicas o dorsales",
          color: "#9fc48a",
          descripcion:
            "Son 12 y están a la altura del tórax. Cada una se articula con un par de costillas, por eso se mueven menos que las demás.",
        },
        {
          id: "lumbares",
          nombre: "Vértebras lumbares",
          color: "#8fb3d9",
          descripcion:
            "Son 5 y son las más grandes porque soportan casi todo el peso del tronco. Están en la parte baja de la espalda.",
        },
        {
          id: "sacro",
          nombre: "Sacro",
          color: "#c49bd6",
          descripcion:
            "Está formado por 5 vértebras que se sueldan en la adultez. Tiene forma de triángulo y encaja entre los dos huesos de la cadera para formar la pelvis.",
        },
        {
          id: "coccix",
          nombre: "Cóccix",
          color: "#d79ec4",
          descripcion:
            "Es el final de la columna. Está formado por 3 a 5 vértebras muy pequeñas soldadas. Es lo que queda de la cola en los seres humanos.",
        },
        {
          id: "discos",
          nombre: "Discos intervertebrales",
          color: "#7fc8c0",
          descripcion:
            "Son almohadillas de cartílago entre vértebra y vértebra. Amortiguan los golpes y permiten que la columna se doble. Son más gruesos en la zona lumbar.",
        },
      ],
    },
    {
      id: "esqueleto",
      titulo: "El Esqueleto",
      resumen: "Los huesos de todo el cuerpo",
      modelo: "/models/esqueleto.glb",
      portada: "/portadas/esqueleto.png",
      orbita: "20deg 85deg auto",
      objetivo: "auto auto auto",
      queEs:
        "Es el armazón del cuerpo. Se divide en el esqueleto axial (cráneo, columna y caja torácica), que forma el eje central, y el esqueleto apendicular, formado por los huesos de los brazos y las piernas y las cinturas que los unen al tronco.",
      funciones: [
        "Sostener el cuerpo y darle forma",
        "Proteger los órganos internos",
        "Permitir el movimiento junto con los músculos",
        "Fabricar las células de la sangre en la médula ósea",
        "Guardar minerales como el calcio y el fósforo",
      ],
      partes: [
        {
          id: "craneo",
          nombre: "Cráneo",
          color: "#e8a0a0",
          descripcion:
            "Protege el encéfalo y forma la cara. Puedes verlo hueso por hueso en el modelo «El Cráneo».",
        },
        {
          id: "columna",
          nombre: "Columna vertebral",
          color: "#e6c07a",
          descripcion:
            "Es el eje del cuerpo: 33 vértebras desde el cuello hasta el cóccix. Tiene su propio modelo, «La Columna Vertebral».",
        },
        {
          id: "caja-toracica",
          nombre: "Caja torácica",
          color: "#9fc48a",
          descripcion:
            "Está formada por 12 pares de costillas, el esternón y los cartílagos costales. Protege el corazón y los pulmones y se mueve al respirar.",
        },
        {
          id: "cintura-escapular",
          nombre: "Clavícula y escápula",
          color: "#7fc8c0",
          descripcion:
            "Forman la cintura escapular, que une los brazos al tronco. La escápula u omóplato es un hueso plano en la espalda, y la clavícula va del esternón al hombro.",
        },
        {
          id: "humero",
          nombre: "Húmero",
          color: "#8fb3d9",
          descripcion:
            "Es el hueso del brazo, entre el hombro y el codo. Es el más largo del miembro superior.",
        },
        {
          id: "radio-cubito",
          nombre: "Radio y cúbito",
          color: "#b3a3e0",
          descripcion:
            "Son los dos huesos del antebrazo. El radio está del lado del pulgar y gira alrededor del cúbito para voltear la mano.",
        },
        {
          id: "mano",
          nombre: "Huesos de la mano",
          color: "#d79ec4",
          descripcion:
            "Cada mano tiene 27 huesos: 8 carpianos en la muñeca, 5 metacarpianos en la palma y 14 falanges en los dedos.",
        },
        {
          id: "pelvis",
          nombre: "Huesos de la cadera",
          color: "#c49bd6",
          descripcion:
            "Los dos coxales, junto con el sacro, forman la pelvis. Sostienen los órganos del abdomen y unen las piernas al tronco.",
        },
        {
          id: "femur",
          nombre: "Fémur y rótula",
          color: "#f0a96e",
          descripcion:
            "El fémur es el hueso del muslo y el más largo y fuerte del cuerpo. La rótula es un hueso pequeño que protege la rodilla por delante.",
        },
        {
          id: "tibia-perone",
          nombre: "Tibia y peroné",
          color: "#e3cf6f",
          descripcion:
            "Son los huesos de la pierna. La tibia es la más gruesa y soporta el peso. El peroné es delgado y está por fuera.",
        },
        {
          id: "pie",
          nombre: "Huesos del pie",
          color: "#c7b6a3",
          descripcion:
            "Cada pie tiene 26 huesos: 7 tarsianos (como el calcáneo, que forma el talón), 5 metatarsianos y 14 falanges.",
        },
      ],
    },
  ],
};
