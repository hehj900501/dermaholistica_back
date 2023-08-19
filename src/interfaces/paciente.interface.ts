import { Document } from "mongoose";
import { SexoI } from "./sexo.interface";

export interface PacienteI extends Document {
    create_date: Date;
    nombres: string;
    apellidos: string;
    fecha_nacimiento: string;
    telefono: string;
    email: string;
    sexo: SexoI;
    diagnostico: string;
}