import type { Sistema } from "./tipos";

export const nervioso: Sistema = {
  id: "nervioso",
  titulo: "Sistema Nervioso",
  resumen: "Encéfalo, médula, nervios y neuronas",
  portada: "/portadas/sistema-central.png",
  introduccion:
    "El sistema nervioso controla y coordina todas las actividades del cuerpo. Recibe información de los sentidos, la procesa y envía órdenes a los músculos y órganos. Se divide en el sistema nervioso central y el periférico, y su unidad básica es la neurona.",
  modelos: [
    {
      id: "central",
      titulo: "Sistema Nervioso Central",
      resumen: "Encéfalo y médula espinal",
      modelo: "/models/sistema-central.glb",
      portada: "/portadas/sistema-central.png",
      orbita: "70deg 80deg 0.55m",
      objetivo: "0m 1.5m 0m",
      queEs:
        "Es la parte del sistema nervioso que recibe la información del cuerpo, la procesa y decide qué respuesta dar. Está formado por el encéfalo, protegido por el cráneo, y la médula espinal, protegida por la columna vertebral.",
      funciones: [
        "Procesar la información que llega de los sentidos",
        "Controlar los movimientos voluntarios",
        "Regular funciones como la respiración y el ritmo cardíaco",
        "Permitir el pensamiento, la memoria y las emociones",
      ],
      partes: [
        {
          id: "lobulo-frontal",
          nombre: "Lóbulo frontal",
          color: "#e8a0a0",
          descripcion:
            "Está en la parte delantera del cerebro. Se encarga del razonamiento, la planificación, la toma de decisiones y de los movimientos voluntarios. También participa en el lenguaje hablado (área de Broca).",
        },
        {
          id: "lobulo-parietal",
          nombre: "Lóbulo parietal",
          color: "#e6c07a",
          descripcion:
            "Se ubica en la parte superior. Recibe la información del tacto, la temperatura y el dolor, y nos ayuda a saber dónde está cada parte del cuerpo en el espacio.",
        },
        {
          id: "lobulo-temporal",
          nombre: "Lóbulo temporal",
          color: "#9fc48a",
          descripcion:
            "Está a los lados, a la altura de las orejas. Procesa lo que escuchamos, participa en la memoria y en la comprensión del lenguaje (área de Wernicke).",
        },
        {
          id: "lobulo-occipital",
          nombre: "Lóbulo occipital",
          color: "#8fb3d9",
          descripcion:
            "Se encuentra en la parte de atrás del cerebro. Es el centro de la visión: interpreta las imágenes, los colores y los movimientos que captan los ojos.",
        },
        {
          id: "lobulo-limbico",
          nombre: "Lóbulo límbico e ínsula",
          color: "#d79ec4",
          descripcion:
            "Está en la cara interna del cerebro, alrededor del cuerpo calloso, e incluye la ínsula, escondida en el fondo del surco lateral. Participa en las emociones, la memoria y el olfato.",
        },
        {
          id: "diencefalo",
          nombre: "Diencéfalo (tálamo e hipotálamo)",
          color: "#c49bd6",
          descripcion:
            "Está en el centro del encéfalo. El tálamo es la estación donde se reparten casi todas las señales de los sentidos, y el hipotálamo controla el hambre, la sed, la temperatura y el sueño.",
        },
        {
          id: "cerebelo",
          nombre: "Cerebelo",
          color: "#b98ad6",
          descripcion:
            "Está debajo de los lóbulos occipitales. Coordina los movimientos, mantiene el equilibrio y la postura, y ayuda a aprender movimientos como andar en bicicleta.",
        },
        {
          id: "tronco-encefalico",
          nombre: "Tronco encefálico",
          color: "#d9b38c",
          descripcion:
            "Une el cerebro con la médula espinal. Está formado por el mesencéfalo, la protuberancia (puente) y el bulbo raquídeo. Controla funciones automáticas como respirar, tragar y el latido del corazón.",
        },
        {
          id: "medula-espinal",
          nombre: "Médula espinal",
          color: "#f0e0b0",
          descripcion:
            "Es un cordón de tejido nervioso que baja por dentro de la columna vertebral. Lleva los mensajes entre el encéfalo y el resto del cuerpo y controla los actos reflejos. De ella salen los nervios raquídeos.",
        },
        {
          id: "meninges",
          nombre: "Meninges",
          color: "#bcd7e8",
          descripcion:
            "Son las membranas que envuelven y protegen el encéfalo y la médula (duramadre, aracnoides y piamadre). En el modelo se ven semitransparentes la duramadre y el tentorio del cerebelo.",
        },
      ],
    },
    {
      id: "periferico",
      titulo: "Sistema Nervioso Periférico",
      resumen: "Nervios que recorren el cuerpo",
      modelo: "/models/sistema-periferico.glb",
      portada: "/portadas/sistema-periferico.png",
      orbita: "15deg 85deg auto",
      objetivo: "auto auto auto",
      queEs:
        "Está formado por todos los nervios y ganglios que están fuera del encéfalo y la médula espinal. Funciona como una red de cables que conecta el sistema nervioso central con los músculos, la piel y los órganos.",
      funciones: [
        "Llevar información de los sentidos al sistema nervioso central (vía sensitiva)",
        "Llevar las órdenes del sistema nervioso central a los músculos (vía motora)",
        "Controlar órganos internos sin que lo pensemos (sistema autónomo)",
      ],
      partes: [
        {
          id: "nervios-craneales",
          nombre: "Nervios craneales",
          color: "#e05d5d",
          descripcion:
            "Son 12 pares de nervios que salen directamente del encéfalo. Controlan la vista, el olfato, el oído, el gusto y los músculos de la cara. El nervio vago baja hasta el tórax y el abdomen.",
        },
        {
          id: "nervios-raquideos",
          nombre: "Nervios raquídeos",
          color: "#f2c230",
          descripcion:
            "Son 31 pares de nervios que salen de la médula espinal por los espacios entre las vértebras. Cada uno es mixto: lleva información sensitiva y motora. Los del tórax son los nervios intercostales.",
        },
        {
          id: "nervios-brazo",
          nombre: "Plexo braquial y nervios del brazo",
          color: "#e89a3c",
          descripcion:
            "El plexo braquial es una red de nervios que sale del cuello hacia el hombro. De él nacen el nervio radial, el mediano y el cubital, que mueven el brazo y la mano y dan sensibilidad a los dedos.",
        },
        {
          id: "nervios-pierna",
          nombre: "Plexo lumbosacro y nervios de la pierna",
          color: "#4b86d6",
          descripcion:
            "De esta red salen el nervio femoral, que baja por delante del muslo, y el nervio ciático, el más largo y grueso del cuerpo, que baja por detrás y se divide en el tibial y el peroneo.",
        },
        {
          id: "sistema-autonomo",
          nombre: "Sistema nervioso autónomo",
          color: "#4fb0a5",
          descripcion:
            "Son los nervios que trabajan sin que lo pensemos. En el modelo se ve el tronco simpático, una cadena de ganglios a los lados de la columna que regula el corazón, la respiración y la digestión.",
        },
        {
          id: "ganglios",
          nombre: "Ganglios",
          color: "#a65fd0",
          descripcion:
            "Son pequeños abultamientos donde se agrupan los cuerpos de las neuronas fuera del sistema nervioso central, como los ganglios raquídeos, junto a la médula espinal.",
        },
        {
          id: "snc-referencia",
          nombre: "Encéfalo y médula (referencia)",
          color: "#c8c8d0",
          descripcion:
            "Se muestran en gris solo como referencia. No forman parte del sistema periférico, pero de ellos salen todos los nervios.",
        },
        {
          id: "esqueleto",
          nombre: "Esqueleto (referencia)",
          color: "#e8e2d8",
          descripcion:
            "El esqueleto se muestra semitransparente para ubicar por dónde pasa cada nervio. Tampoco forma parte del sistema nervioso.",
        },
      ],
    },
    {
      id: "neurona",
      titulo: "Neuronas y Sinapsis",
      resumen: "La unidad del sistema nervioso",
      modelo: "/models/neurona-sinapsis.glb",
      portada: "/portadas/neurona-sinapsis.png",
      orbita: "20deg 75deg 75%",
      objetivo: "auto auto auto",
      queEs:
        "La neurona es la célula principal del sistema nervioso. Recibe y transmite información mediante impulsos eléctricos. La sinapsis es la zona de comunicación entre una neurona y otra célula, donde el mensaje pasa usando sustancias químicas llamadas neurotransmisores.",
      funciones: [
        "Recibir estímulos por las dendritas",
        "Conducir el impulso nervioso a lo largo del axón",
        "Transmitir el mensaje a otra neurona en la sinapsis",
      ],
      partes: [
        {
          id: "soma",
          nombre: "Soma (cuerpo celular)",
          color: "#b48ad8",
          descripcion:
            "Es el cuerpo de la neurona. Contiene el núcleo y los orgánulos que mantienen viva a la célula. Aquí se juntan las señales que llegan por las dendritas.",
        },
        {
          id: "nucleo",
          nombre: "Núcleo",
          color: "#5a3a8a",
          descripcion:
            "Guarda el material genético (ADN) y controla las funciones de la neurona. Dentro tiene el nucléolo.",
        },
        {
          id: "dendritas",
          nombre: "Dendritas",
          color: "#c9a5e8",
          descripcion:
            "Son prolongaciones cortas y muy ramificadas. Reciben los mensajes de otras neuronas y los llevan hacia el soma.",
        },
        {
          id: "dendrita-apical",
          nombre: "Dendrita apical",
          color: "#a87fd6",
          descripcion:
            "En las neuronas piramidales, como esta, una dendrita más gruesa y larga sale de la punta del soma y sube hacia la superficie de la corteza. De ella salen muchas ramas.",
        },
        {
          id: "axon",
          nombre: "Axón",
          color: "#8a5fc0",
          descripcion:
            "Es una prolongación larga y única que conduce el impulso nervioso desde el soma hasta las terminales. Algunos axones miden más de un metro.",
        },
        {
          id: "vaina-mielina",
          nombre: "Vaina de mielina",
          color: "#f3e3b5",
          descripcion:
            "Es una capa de grasa que envuelve al axón y lo aísla, como el plástico de un cable. Hace que el impulso viaje mucho más rápido. La forman las células de Schwann.",
        },
        {
          id: "nodos-ranvier",
          nombre: "Nódulos de Ranvier",
          color: "#e0506a",
          descripcion:
            "Son los pequeños espacios sin mielina entre un segmento y otro. El impulso salta de un nódulo al siguiente (conducción saltatoria).",
        },
        {
          id: "terminales-axonicos",
          nombre: "Terminales axónicos",
          color: "#8a5fc0",
          descripcion:
            "Son las ramificaciones finales del axón. Llevan el impulso hasta los botones sinápticos.",
        },
        {
          id: "botones-sinapticos",
          nombre: "Botones sinápticos",
          color: "#d58fd8",
          descripcion:
            "Son los extremos engrosados de los terminales. Forman la parte presináptica de la sinapsis y guardan las vesículas con neurotransmisores.",
        },
        {
          id: "vesiculas",
          nombre: "Vesículas sinápticas",
          color: "#f28c28",
          descripcion:
            "Son pequeñas bolsitas que almacenan los neurotransmisores. Cuando llega el impulso, se unen a la membrana y los liberan.",
        },
        {
          id: "neurotransmisores",
          nombre: "Neurotransmisores",
          color: "#ffd23f",
          descripcion:
            "Son sustancias químicas (como la dopamina, la serotonina o la acetilcolina) que cruzan la hendidura sináptica, el pequeño espacio entre las dos neuronas, y llevan el mensaje.",
        },
        {
          id: "neurona-postsinaptica",
          nombre: "Neurona postsináptica",
          color: "#6fa8dc",
          descripcion:
            "Es la neurona que recibe el mensaje. Sus receptores captan los neurotransmisores y así el impulso continúa por esta nueva neurona.",
        },
      ],
    },
  ],
};
