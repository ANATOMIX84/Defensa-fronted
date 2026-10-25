import { circulatorio } from "./circulatorio";
import { muscular } from "./muscular";
import { nervioso } from "./nervioso";
import { oseo } from "./oseo";

export type { Modelo, Parte, Sistema } from "./tipos";

export const sistemas = [circulatorio, nervioso, oseo, muscular];
