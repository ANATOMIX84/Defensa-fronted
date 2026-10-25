import type { Sistema } from "./tipos";

export const circulatorio: Sistema = {
  id: "circulatorio",
  titulo: "Sistema Circulatorio",
  resumen: "Corazón, arterias y venas",
  portada: "/portadas/corazon.png",
  introduccion:
    "El sistema circulatorio lleva la sangre a todo el cuerpo. El corazón la bombea sin parar, las arterias la llevan desde el corazón hasta los órganos y las venas la devuelven. Así llegan el oxígeno y los nutrientes a cada célula y se retiran los desechos.",
  modelos: [
    {
      id: "corazon",
      titulo: "El Corazón",
      resumen: "Cavidades, válvulas y vasos del corazón",
      modelo: "/models/corazon.glb",
      portada: "/portadas/corazon.png",
      orbita: "0deg 80deg auto",
      objetivo: "auto auto auto",
      queEs:
        "Es un órgano muscular hueco, del tamaño de un puño, que está en el tórax entre los dos pulmones. Funciona como una bomba doble: el lado derecho envía la sangre a los pulmones y el lado izquierdo la envía al resto del cuerpo. Late unas 70 veces por minuto.",
      funciones: [
        "Bombear la sangre a todo el cuerpo",
        "Enviar la sangre a los pulmones para que se oxigene",
        "Mantener la presión para que la sangre circule",
      ],
      partes: [
        {
          id: "auricula-derecha",
          nombre: "Aurícula derecha",
          color: "#7fa6d9",
          descripcion:
            "Recibe la sangre sin oxígeno que vuelve del cuerpo por las venas cavas superior e inferior. Al contraerse la pasa al ventrículo derecho.",
        },
        {
          id: "ventriculo-derecho",
          nombre: "Ventrículo derecho",
          color: "#5b84c4",
          descripcion:
            "Impulsa la sangre sin oxígeno hacia los pulmones por la arteria pulmonar. Su pared es más delgada que la del ventrículo izquierdo porque los pulmones están cerca. Dentro tiene los músculos papilares, que sostienen la válvula tricúspide.",
        },
        {
          id: "auricula-izquierda",
          nombre: "Aurícula izquierda",
          color: "#e89a9a",
          descripcion:
            "Recibe la sangre con oxígeno que llega de los pulmones por las cuatro venas pulmonares y la pasa al ventrículo izquierdo.",
        },
        {
          id: "ventriculo-izquierdo",
          nombre: "Ventrículo izquierdo",
          color: "#d46a6a",
          descripcion:
            "Es la cavidad más fuerte del corazón. Su pared es la más gruesa porque tiene que empujar la sangre oxigenada por la aorta hacia todo el cuerpo.",
        },
        {
          id: "valvula-tricuspide",
          nombre: "Válvula tricúspide",
          color: "#f2d16b",
          descripcion:
            "Está entre la aurícula y el ventrículo derechos. Se abre para dejar pasar la sangre y se cierra para que no regrese a la aurícula cuando el ventrículo se contrae.",
        },
        {
          id: "valvula-mitral",
          nombre: "Válvula mitral",
          color: "#f0a96e",
          descripcion:
            "Separa la aurícula izquierda del ventrículo izquierdo. También se llama bicúspide porque tiene dos valvas. En el modelo se ve una de ellas.",
        },
        {
          id: "valvula-aortica",
          nombre: "Válvula aórtica",
          color: "#9fc48a",
          descripcion:
            "Está a la salida del ventrículo izquierdo, en el inicio de la aorta. Tiene tres valvas en forma de media luna que impiden que la sangre vuelva al corazón.",
        },
        {
          id: "valvula-pulmonar",
          nombre: "Válvula pulmonar",
          color: "#7fc8c0",
          descripcion:
            "Está a la salida del ventrículo derecho, en el inicio del tronco pulmonar. Igual que la aórtica, tiene tres valvas semilunares.",
        },
        {
          id: "aorta",
          nombre: "Aorta",
          color: "#c0392b",
          descripcion:
            "Es la arteria más grande del cuerpo. Sale del ventrículo izquierdo, sube y forma el cayado aórtico, y de ella nacen las arterias que llevan sangre a la cabeza, los brazos y el resto del cuerpo.",
        },
        {
          id: "tronco-pulmonar",
          nombre: "Tronco y arterias pulmonares",
          color: "#6c5fb5",
          descripcion:
            "Salen del ventrículo derecho y se dividen en dos, una para cada pulmón. Son las únicas arterias que llevan sangre sin oxígeno.",
        },
        {
          id: "venas-cavas",
          nombre: "Venas cavas",
          color: "#2f5aa8",
          descripcion:
            "La vena cava superior trae la sangre de la cabeza y los brazos, y la inferior la del abdomen y las piernas. Las dos desembocan en la aurícula derecha.",
        },
        {
          id: "venas-pulmonares",
          nombre: "Venas pulmonares",
          color: "#e0707f",
          descripcion:
            "Son cuatro, dos de cada pulmón, y llegan a la aurícula izquierda. Son las únicas venas que llevan sangre con oxígeno.",
        },
        {
          id: "coronarias",
          nombre: "Arterias coronarias",
          color: "#e8463c",
          descripcion:
            "Rodean el corazón como una corona y alimentan al propio músculo cardíaco. Nacen en el inicio de la aorta. Si una se tapa se produce un infarto.",
        },
        {
          id: "venas-cardiacas",
          nombre: "Venas cardíacas",
          color: "#4b86d6",
          descripcion:
            "Recogen la sangre que ya usó el músculo del corazón y la llevan al seno coronario, que la vacía en la aurícula derecha.",
        },
      ],
    },
    {
      id: "circulacion",
      titulo: "Circulación del Cuerpo",
      resumen: "Arterias y venas de todo el cuerpo",
      modelo: "/models/circulacion.glb",
      portada: "/portadas/circulacion.png",
      orbita: "0deg 85deg auto",
      objetivo: "auto auto auto",
      queEs:
        "Es la red de vasos sanguíneos por la que viaja la sangre. Hay dos circuitos: la circulación mayor, que va del corazón a todo el cuerpo y vuelve, y la circulación menor o pulmonar, que va del corazón a los pulmones para cargar oxígeno y vuelve.",
      funciones: [
        "Llevar oxígeno y nutrientes a todas las células",
        "Recoger el dióxido de carbono y otros desechos",
        "Transportar hormonas y defensas",
        "Ayudar a mantener la temperatura del cuerpo",
      ],
      partes: [
        {
          id: "corazon",
          nombre: "Corazón",
          color: "#d46a6a",
          descripcion:
            "Es el centro del sistema. Con cada latido impulsa la sangre por las arterias. Puedes verlo en detalle en el modelo «El Corazón».",
        },
        {
          id: "aorta",
          nombre: "Aorta",
          color: "#b8231b",
          descripcion:
            "Sale del corazón, forma un arco y baja por delante de la columna hasta el abdomen, donde se divide en las dos arterias ilíacas que van a las piernas.",
        },
        {
          id: "arterias",
          nombre: "Arterias",
          color: "#e8463c",
          descripcion:
            "Llevan la sangre desde el corazón hacia los órganos. Tienen paredes gruesas y elásticas porque la sangre pasa con fuerza. Algunas importantes son las carótidas (cuello), la braquial (brazo) y la femoral (muslo).",
        },
        {
          id: "venas-cavas",
          nombre: "Venas cavas",
          color: "#1f4a99",
          descripcion:
            "Son las venas más grandes. La superior recoge la sangre de la parte de arriba del cuerpo y la inferior la de abajo. Las dos llegan al corazón.",
        },
        {
          id: "venas",
          nombre: "Venas",
          color: "#4b86d6",
          descripcion:
            "Devuelven la sangre al corazón. Sus paredes son más delgadas y muchas tienen válvulas para que la sangre no baje por la gravedad. Ejemplos: las yugulares (cuello) y las safenas (pierna).",
        },
        {
          id: "arterias-pulmonares",
          nombre: "Arterias pulmonares",
          color: "#7b5fc4",
          descripcion:
            "Llevan la sangre sin oxígeno del corazón a los pulmones. Forman parte de la circulación menor.",
        },
        {
          id: "venas-pulmonares",
          nombre: "Venas pulmonares",
          color: "#e58aa0",
          descripcion:
            "Traen de vuelta al corazón la sangre que ya se cargó de oxígeno en los pulmones.",
        },
        {
          id: "pulmones",
          nombre: "Pulmones (referencia)",
          color: "#f2b8c0",
          descripcion:
            "Se muestran semitransparentes para ubicar la circulación pulmonar. En ellos la sangre deja el dióxido de carbono y toma oxígeno.",
        },
        {
          id: "esqueleto",
          nombre: "Esqueleto (referencia)",
          color: "#e8e2d8",
          descripcion:
            "El esqueleto se muestra semitransparente para ubicar por dónde pasa cada vaso. No forma parte del sistema circulatorio.",
        },
      ],
    },
  ],
};
