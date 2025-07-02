import { Paises } from "../../paises/model/PaisesModel";
import { Usuario } from "../../usuarios/models/Usuario/UsuarioModel";

export interface Planta{
    idPlanta: Number,
    nombrePlanta: String,
    cantLecturas: Number,
    alertasMedidas: Number,
    alertasRojas: Number,
    sensoresDeshab:Number,
    usuarioIdUsuario: Usuario,
    pais:Paises
}