import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/app/admin/libros/shared/libro.model';
import { CarritoService } from '../shared/carrito.service';
import { HomeService } from '../shared/home.service';

@Component({
  selector: 'app-detalles-libro',
  templateUrl: './detalles-libro.component.html',
  styleUrls: []
})
export class DetallesLibroComponent implements OnInit {

  libro! : Libro;

  constructor(
    private activateRoute : ActivatedRoute,
    private homeService: HomeService,
    private carritoService: CarritoService,
    private snackBar : MatSnackBar
  ) { }

  ngOnInit(): void {
    const slug = this.activateRoute.snapshot.paramMap.get("slug")!;
    this.homeService.getLibro(slug)
    .subscribe(libro => this.libro = libro);
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
