import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { CatalogoController } from './controllers/catalogo.controller';
import { LaboratorioController } from './controllers/laboratorio.controller';
import { PacienteController } from './controllers/paciente.controller';
import { ProductoComercialController } from './controllers/producto-comercial.controller';
import { RecetaController } from './controllers/receta.controller';
import { SexoController } from './controllers/sexo.controller';
import { CatalogoSchema } from './schemas/catalogo.schema';
import { LaboratorioSchema } from './schemas/laboratorio.schema';
import { PacienteSchema } from './schemas/paciente.schema';
import { ProductoComercialSchema } from './schemas/producto-comercial.schema';
import { RecetaSchema } from './schemas/receta.schema';
import { SexoSchema } from './schemas/sexo.schema';
import { CatalogoService } from './services/catalogo.service';
import { LaboratorioService } from './services/laboratorio.service';
import { PacienteService } from './services/paciente.service';
import { ProductoComercialService } from './services/producto-comercial.service';
import { RecetaService } from './services/receta.service';
import { SexoService } from './services/sexo.service';
import { jwtConstants } from './constants';
import { TipoMedicamentoSchema } from './schemas/tipo-medicamento.schema';
import { TipoMedicamentoController } from './controllers/tipo-medicamento.controller';
import { TipoMedicamentoService } from './services/tipo-medicamento.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '34560s' },
    }),
    MongooseModule.forRoot('mongodb://localhost/holistica', { useNewUrlParser: true }),
    MongooseModule.forFeature([
      { name: 'Catalogo', schema: CatalogoSchema },
      { name: 'Laboratorio', schema: LaboratorioSchema },
      { name: 'Paciente', schema: PacienteSchema },
      { name: 'ProductoComercial', schema: ProductoComercialSchema },
      { name: 'Receta', schema: RecetaSchema },
      { name: 'Sexo', schema: SexoSchema },
      { name: 'TipoMedicamento', schema: TipoMedicamentoSchema },
    ])
  ],
  controllers: [
    CatalogoController,
    LaboratorioController,
    PacienteController,
    ProductoComercialController,
    RecetaController,
    SexoController,
    TipoMedicamentoController,
  ],
  providers: [
    // SERVICIOS
    CatalogoService,
    LaboratorioService,
    PacienteService,
    ProductoComercialService,
    RecetaService,
    SexoService,
    TipoMedicamentoService,
  ],
})
export class AppModule { }
