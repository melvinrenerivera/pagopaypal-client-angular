import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { EditLibroComponent } from './libros/edit-libro/edit-libro.component';
import { LibroListComponent } from './libros/libro-list/libro-list.component';
import { NewLibroComponent } from './libros/new-libro/new-libro.component';
import { EditUsuarioComponent } from './usuarios/edit-usuario/edit-usuario.component';
import { ListUsuarioComponent } from './usuarios/list-usuario/list-usuario.component';
import { NewUsuarioComponent } from './usuarios/new-usuario/new-usuario.component';
import { DetallesVentaComponent } from './ventas/detalles-venta/detalles-venta.component';
import { VentaComponent } from './ventas/venta/venta.component';

const routes: Routes = [
  {
    path: '',
    component : LayoutComponent,
    children : [
      {
        path : 'libros', 
        component: LibroListComponent
      },
      {
        path: 'libros/nuevo',
        component: NewLibroComponent
      },
      {
        path: 'libros/:id/editar',
        component: EditLibroComponent
      },
      {
        path: 'usuarios',
        component: ListUsuarioComponent
      },
      {
        path: 'usuarios/nuevo',
        component: NewUsuarioComponent
      },
      {
        path: 'usuarios/:id/editar',
        component: EditUsuarioComponent
      },
      {
        path : 'ventas',
        component: VentaComponent
      },
      {
        path : 'detalles-venta/:id',
        component: DetallesVentaComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
