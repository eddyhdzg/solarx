import { MexicanStateKeys } from "./mexicanCities.constant";
// Sorted by name for a better UX

export interface MexicanState {
  key: MexicanStateKeys;
  name: string;
}
export const mexicanStates: MexicanState[] = [
  { key: "AGU", name: "Aguascalientes" },
  { key: "BCN", name: "Baja California" },
  { key: "BCS", name: "Baja California Sur" },
  { key: "CAM", name: "Campeche" },
  { key: "CHP", name: "Chiapas" },
  { key: "CHH", name: "Chihuahua" },
  { key: "CMX", name: "Ciudad de México" },
  { key: "COA", name: "Coahuila" },
  { key: "COL", name: "Colima" },
  { key: "DUR", name: "Durango" },
  { key: "GUA", name: "Guanajuato" },
  { key: "GRO", name: "Guerrero" },
  { key: "HID", name: "Hidalgo" },
  { key: "JAL", name: "Jalisco" },
  { key: "MEX", name: "Estado de México" },
  { key: "MIC", name: "Michoacán" },
  { key: "MOR", name: "Morelos" },
  { key: "NAY", name: "Nayarit" },
  { key: "NLE", name: "Nuevo León" },
  { key: "OAX", name: "Oaxaca" },
  { key: "PUE", name: "Puebla" },
  { key: "QUE", name: "Querétaro" },
  { key: "ROO", name: "Quintana Roo" },
  { key: "SLP", name: "San Luis Potosí" },
  { key: "SIN", name: "Sinaloa" },
  { key: "SON", name: "Sonora" },
  { key: "TAB", name: "Tabasco" },
  { key: "TAM", name: "Tamaulipas" },
  { key: "TLA", name: "Tlaxcala" },
  { key: "VER", name: "Veracruz" },
  { key: "YUC", name: "Yucatán" },
  { key: "ZAC", name: "Zacatecas" },
];
