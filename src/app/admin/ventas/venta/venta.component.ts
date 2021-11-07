import { Component, OnInit } from '@angular/core';
import { Venta, VentaPage } from 'src/app/home/shared/venta.model';
import { VentaService } from '../shared/venta.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: []
})
export class VentaComponent implements OnInit {

  ventaPage!: VentaPage;
  displayedColumns: string[] = ["titulo","total","estado","accion"];


  constructor(
    private ventaService: VentaService
  ) { }

  ngOnInit(): void {
    this.ventaService.getVentas()
    .subscribe((page : VentaPage) => this.ventaPage = page);
  }

   obtenerVentas(){
   
  }

}
