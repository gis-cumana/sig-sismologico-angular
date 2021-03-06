import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap/collapse/collapse.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap/popover/popover.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FlashMessagesModule } from 'angular2-flash-messages';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';

import { CategoriasComponent } from './components/categorias/categorias.component';
import { CrearCategoriasComponent } from './components/categorias/crear/crear.component';
import { BuscarCategoriasComponent } from './components/categorias/buscar/buscar.component';
import { ActualizarCategoriasComponent } from './components/categorias/actualizar/actualizar.component';
import { EliminarCategoriasComponent } from './components/categorias/eliminar/eliminar.component';

import { CategoriasService } from './services/categorias/categorias.service';

///INTEGRACION
import { CasosService } from './services/casos.service';
import { SucesosService } from './services/sucesos.service';
///INTEGRACION//

import { CapasComponent } from './components/capas/capas.component';
import { CrearCapasComponent } from './components/capas/crear/crear.component';
import { BuscarCapasComponent } from './components/capas/buscar/buscar.component';
import { ActualizarCapasComponent } from './components/capas/actualizar/actualizar.component';
import { EliminarCapasComponent } from './components/capas/eliminar/eliminar.component';
import { CapasService } from './services/capas/capas.service';

import { DatosComponent } from './components/datos/datos.component';
import { AgregarDatosComponent } from './components/datos/agregar/agregar.component';
import { BuscarDatosComponent } from './components/datos/buscar/buscar.component';
import { ActualizarDatosComponent } from './components/datos/actualizar/actualizar.component';
import { EliminarDatosComponent } from './components/datos/eliminar/eliminar.component';
import { DatosService } from './services/datos/datos.service';

///INTEGRACION
import { CasosComponent } from './components/casos/casos.component';
import { InputTextModule, ButtonModule, DialogModule, InputMaskModule, GrowlModule, FileUploadModule, DataTableModule, DataListModule}  from 'primeng/primeng';

import { DropdownModule }  from 'primeng/components/dropdown/dropdown';
import { SucesosComponent } from './components/sucesos/sucesos.component';
///INTEGRACION//
import { ImportarCapasComponent, ImportarCapasContent } from './components/capas/importar/importar.component';

const appRoutes : Routes = [
  { path: '', component: InicioComponent},
  { path: 'categorias', component: CategoriasComponent},
  { path: 'capas', component: CapasComponent},
  { path: 'datos', component: DatosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    CategoriasComponent,
    CrearCategoriasComponent,
    BuscarCategoriasComponent,
    ActualizarCategoriasComponent,
    EliminarCategoriasComponent,
    CapasComponent,
    CrearCapasComponent,
    ImportarCapasComponent,
    ImportarCapasContent,
    BuscarCapasComponent,
    ActualizarCapasComponent,
    EliminarCapasComponent,
    DatosComponent,
    AgregarDatosComponent,
    BuscarDatosComponent,
    ActualizarDatosComponent,
    EliminarDatosComponent
  ],
  entryComponents: [ImportarCapasContent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbCollapseModule.forRoot(),
    NgbDropdownModule.forRoot(),
    NgbPopoverModule.forRoot(),
    NgbModalModule.forRoot(),
    AngularFontAwesomeModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule
  ],
  providers: [CategoriasService, CapasService, DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
