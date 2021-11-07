import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item, Venta } from 'src/app/home/shared/venta.model';
import { VentaService } from '../shared/venta.service';

@Component({
  selector: 'app-detalles-venta',
  templateUrl: './detalles-venta.component.html',
  styleUrls: []
})
export class DetallesVentaComponent implements OnInit {

  venta!: Venta;

  constructor(
    private route: ActivatedRoute,
    private ventaService: VentaService  
  ) { }

  ngOnInit(): void {
    const idVenta= parseInt(this.route.snapshot.paramMap.get("id")!);
    this.ventaService.getVenta(idVenta)
    .subscribe((venta: Venta) => this.venta= venta);
    
  }
  
  resetDowload(detalleVenta: Item){
       this.ventaService.resetDowload(detalleVenta)
       .subscribe(r => console.log(r));

       this.ventaService.getVenta(this.venta.id)
       .subscribe((venta: Venta) => this.venta= venta);
  }


}
