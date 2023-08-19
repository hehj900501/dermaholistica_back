import { Document } from "mongoose";
import { SexoDto } from "./sexo-dto";

export class PacienteDto extends Document {
    readonly create_date: Date;
    readonly nombres : string;
    readonly apellidos : string;
    readonly fecha_nacimiento : string;
    readonly telefono : string;
    readonly email : string;
    readonly sexo : SexoDto;
    readonly diagnostico : string;
}