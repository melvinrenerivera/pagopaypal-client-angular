import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Libro } from 'src/app/admin/libros/shared/libro.model';
import { CarritoService } from '../shared/carrito.service';
import { HomeService } from '../shared/home.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: []
})
export class IndexComponent implements OnInit {

  ultimosLibros! : Libro[];

  constructor(
    private homeService:HomeService,
    private carritoService: CarritoService,
    private snackBar : MatSnackBar
  ) { }

  ngOnInit(): void {
    this.homeService.getUltimoLibros()
    .subscribe(libro=> this.ultimosLibros = libro);
  }

  

}
