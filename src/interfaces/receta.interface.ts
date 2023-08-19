import { Document } from "mongoose";
import { PacienteI } from "./paciente.interface";

export interface RecetaI extends Document {
    create_date: Date;
    paciente: PacienteI;
    productos : []
}