import { Document } from "mongoose";
import { PacienteDto } from "./paciente-dto";

export class RecetaDto extends Document {
    readonly create_date: Date;
    readonly paciente: PacienteDto;
    readonly productos: [];
}