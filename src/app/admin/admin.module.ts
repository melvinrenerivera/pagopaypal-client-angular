import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibroListComponent } from './libros/libro-list/libro-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NewLibroComponent } from './libros/new-libro/new-libro.component';
import { EditLibroComponent } from './libros/edit-libro/edit-libro.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EditUsuarioComponent } from './usuarios/edit-usuario/edit-usuario.component';
import { NewUsuarioComponent } from './usuarios/new-usuario/new-usuario.component';
import { ListUsuarioComponent } from './usuarios/list-usuario/list-usuario.component';
import { MaterialModule } from '../material/material.module';
import { FormLibroComponent } from './libros/shared/form-libro/form-libro.component';
import { FormUsuarioComponent } from './usuarios/shared/form-usuario/form-usuario.component';
import { LayoutComponent } from './layout/layout.component';
import { DetallesVentaComponent } from './ventas/detalles-venta/detalles-venta.component';
import { VentaComponent } from './ventas/venta/venta.component';



@NgModule({
  declarations: [
    LibroListComponent,
    NewLibroComponent,
    EditLibroComponent,
    UsuariosComponent,
    EditUsuarioComponent,
    NewUsuarioComponent,
    ListUsuarioComponent,
    FormLibroComponent,
    FormUsuarioComponent,
    LayoutComponent,
    VentaComponent,
    DetallesVentaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class AdminModule { }
//si exporto el adminModulo dentro del appModulo ya no podria usar lazyload
