import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const PacienteSchema = new Schema({
    create_date: { type: Date, default: new Date() },
    nombres: { type: String },
    apellidos: { type: String },
    fecha_nacimiento: { type: String },
    telefono: { type: String },
    email: { type: String },
    sexo: { type: constMongoose.ObjectId, ref: 'Sexo' },
    diagnostico: { type: String }
});