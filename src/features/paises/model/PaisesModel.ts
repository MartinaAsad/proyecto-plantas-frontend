import { Planta } from "../../plantas/model/PlantaModel"

export interface Paises{
    id: Number, 
    nombrePais: String,
    imagen: String
    plantaCollection?:Planta[]
}