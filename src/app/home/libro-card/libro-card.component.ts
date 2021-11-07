import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Libro } from 'src/app/admin/libros/shared/libro.model';
import { CarritoService } from '../shared/carrito.service';

@Component({
  selector: 'app-libro-card',
  templateUrl: './libro-card.component.html',
  styleUrls: []
})
export class LibroCardComponent implements OnInit {

  @Input() libro!: Libro;

  constructor(
    private carritoService: CarritoService,
    private snackBar : MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  agregarACarrito(libro : Libro){
    this.carritoService.agregarItem(libro);
    this.snackBar.open('Item agregado al carrito','Cerrar',{
      duration: 3* 1000,
      horizontalPosition : 'center',
      verticalPosition: 'top'
    });
  }

  libroYaEstaAgregado(libro : Libro){
    return this.carritoService.itemYaExiste(libro);
  }

}
