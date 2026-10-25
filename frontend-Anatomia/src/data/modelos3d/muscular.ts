import type { Sistema } from "./tipos";

export const muscular: Sistema = {
  id: "muscular",
  titulo: "Sistema Muscular",
  resumen: "Los músculos de todo el cuerpo",
  portada: "/portadas/muscular.png",
  introduccion:
    "El sistema muscular está formado por más de 600 músculos. Los músculos se contraen y se relajan, y al hacerlo tiran de los huesos a los que están unidos por los tendones. Así podemos movernos, mantener la postura y hasta producir calor.",
  modelos: [
    {
      id: "muscular",
      titulo: "Músculos del Cuerpo",
      resumen: "Principales músculos esqueléticos",
      modelo: "/models/muscular.glb",
      portada: "/portadas/muscular.png",
      orbita: "20deg 85deg auto",
      objetivo: "auto auto auto",
      queEs:
        "Son los músculos esqueléticos, los que están unidos a los huesos y movemos a voluntad. Trabajan en parejas: cuando uno se contrae, el del lado opuesto se relaja (por ejemplo, el bíceps y el tríceps). En el modelo se destacan los más importantes y el resto se muestra en un solo color.",
      funciones: [
        "Mover el cuerpo y sus partes",
        "Mantener la postura y el equilibrio",
        "Proteger los órganos del abdomen",
        "Producir calor al contraerse",
      ],
      partes: [
        {
          id: "cabeza",
          nombre: "Músculos de la cabeza",
          color: "#e8a0a0",
          descripcion:
            "Incluyen los músculos de la expresión facial, como el orbicular de los ojos, el orbicular de los labios y el cigomático (el de la sonrisa), y los de la masticación, como el masetero y el temporal, que cierran la mandíbula.",
        },
        {
          id: "esternocleidomastoideo",
          nombre: "Esternocleidomastoideo",
          color: "#f0a96e",
          descripcion:
            "Va desde detrás de la oreja hasta el esternón y la clavícula. Gira la cabeza hacia el lado contrario y la inclina hacia adelante.",
        },
        {
          id: "trapecio",
          nombre: "Trapecio",
          color: "#8fb3d9",
          descripcion:
            "Es un músculo grande en forma de rombo en la parte alta de la espalda. Eleva los hombros, junta las escápulas y ayuda a sostener la cabeza.",
        },
        {
          id: "deltoides",
          nombre: "Deltoides",
          color: "#e6c07a",
          descripcion:
            "Cubre el hombro como una hombrera. Levanta el brazo hacia adelante, hacia el costado y hacia atrás.",
        },
        {
          id: "pectoral-mayor",
          nombre: "Pectoral mayor",
          color: "#d46a6a",
          descripcion:
            "Está en el pecho. Lleva el brazo hacia adelante y hacia el centro del cuerpo, como al dar un abrazo o empujar.",
        },
        {
          id: "biceps-braquial",
          nombre: "Bíceps braquial",
          color: "#9fc48a",
          descripcion:
            "Está en la cara delantera del brazo y tiene dos cabezas. Dobla el codo y gira el antebrazo para poner la palma hacia arriba.",
        },
        {
          id: "triceps-braquial",
          nombre: "Tríceps braquial",
          color: "#7fc8c0",
          descripcion:
            "Está en la parte de atrás del brazo y tiene tres cabezas. Estira el codo, es decir, hace lo contrario que el bíceps.",
        },
        {
          id: "antebrazo",
          nombre: "Músculos del antebrazo",
          color: "#c49bd6",
          descripcion:
            "Son muchos músculos largos que terminan en tendones hacia la mano. Los de adelante (flexores) cierran la mano y la muñeca, y los de atrás (extensores) las abren. También están el braquiorradial y los pronadores.",
        },
        {
          id: "recto-abdominal",
          nombre: "Recto abdominal",
          color: "#e3cf6f",
          descripcion:
            "Va del esternón al pubis por delante del abdomen. Sus tendones lo dividen en cuadros, los famosos «cuadritos». Dobla el tronco hacia adelante y protege los órganos.",
        },
        {
          id: "oblicuos",
          nombre: "Oblicuos del abdomen",
          color: "#b3a3e0",
          descripcion:
            "Son el oblicuo externo y el interno, a los costados del abdomen. Sus fibras van en diagonal y sirven para girar e inclinar el tronco.",
        },
        {
          id: "dorsal-ancho",
          nombre: "Dorsal ancho",
          color: "#5b84c4",
          descripcion:
            "Es el músculo más ancho de la espalda. Lleva el brazo hacia abajo y hacia atrás, como al trepar o al nadar.",
        },
        {
          id: "gluteos",
          nombre: "Glúteos",
          color: "#d79ec4",
          descripcion:
            "Son el glúteo mayor, el mediano y el menor. El mayor es el músculo más grande del cuerpo: estira la cadera al subir escaleras o levantarse de una silla.",
        },
        {
          id: "cuadriceps",
          nombre: "Cuádriceps",
          color: "#f2b35b",
          descripcion:
            "Está en la parte delantera del muslo y tiene cuatro cabezas: el recto femoral y los vastos lateral, medial e intermedio. Estira la rodilla para patear, saltar o caminar.",
        },
        {
          id: "sartorio",
          nombre: "Sartorio",
          color: "#4fb0a5",
          descripcion:
            "Es el músculo más largo del cuerpo. Cruza el muslo en diagonal desde la cadera hasta la rodilla y ayuda a cruzar las piernas.",
        },
        {
          id: "aductores",
          nombre: "Aductores",
          color: "#a87fd6",
          descripcion:
            "Están en la cara interna del muslo (aductor largo, corto y mayor, grácil y pectíneo). Juntan las piernas.",
        },
        {
          id: "isquiotibiales",
          nombre: "Isquiotibiales",
          color: "#6fa8dc",
          descripcion:
            "Son el bíceps femoral, el semitendinoso y el semimembranoso, en la parte de atrás del muslo. Doblan la rodilla y estiran la cadera.",
        },
        {
          id: "triceps-sural",
          nombre: "Gemelos y sóleo",
          color: "#e0707f",
          descripcion:
            "Forman la pantorrilla y se unen al talón por el tendón de Aquiles, el más fuerte del cuerpo. Elevan el talón para ponerse de puntillas, caminar y correr.",
        },
        {
          id: "tibial-anterior",
          nombre: "Tibial anterior",
          color: "#9bd17a",
          descripcion:
            "Está delante de la pierna, junto a la tibia. Levanta la punta del pie al caminar para que no se arrastre.",
        },
        {
          id: "otros-musculos",
          nombre: "Otros músculos",
          color: "#d9a49b",
          descripcion:
            "El resto de los músculos del cuerpo, como los intercostales, el serrato anterior, los romboides, los de la mano y el pie, y los músculos profundos de la espalda.",
        },
        {
          id: "esqueleto",
          nombre: "Esqueleto (referencia)",
          color: "#e8e2d8",
          descripcion:
            "El esqueleto se muestra semitransparente para ver dónde se une cada músculo. No forma parte del sistema muscular.",
        },
      ],
    },
  ],
};
