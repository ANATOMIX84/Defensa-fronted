export interface Parte {
  id: string;
  nombre: string;
  color: string;
  descripcion: string;
}

export interface Modelo {
  id: string;
  titulo: string;
  resumen: string;
  modelo: string;
  portada: string;
  orbita: string;
  objetivo: string;
  queEs: string;
  funciones: string[];
  partes: Parte[];
}

export interface Sistema {
  id: string;
  titulo: string;
  resumen: string;
  portada: string;
  introduccion: string;
  modelos: Modelo[];
}
