import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const RecetaSchema = new Schema({
    create_date: { type: Date, default: new Date() },
    paciente: { type: constMongoose.ObjectId, ref: 'Paciente' },
    productos: [{}],
});