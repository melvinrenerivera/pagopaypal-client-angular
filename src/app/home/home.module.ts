import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { IndexComponent } from './index/index.component';
import { HomeRoutingModule } from './admin-routing.module';
import { LibrosComponent } from './libros/libros.component';
import { DetallesLibroComponent } from './detalles-libro/detalles-libro.component';
import { LibroCardComponent } from './libro-card/libro-card.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CarritoComponent } from './carrito/carrito.component';
import { DetallesVentaComponent } from './detalles-venta/detalles-venta.component';



@NgModule({
  declarations: [
    LayoutComponent,
    IndexComponent,
    LibrosComponent,
    DetallesLibroComponent,
    LibroCardComponent,
    CarritoComponent,
    DetallesVentaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    HomeRoutingModule,
    InfiniteScrollModule
  ]
})
export class HomeModule { }
