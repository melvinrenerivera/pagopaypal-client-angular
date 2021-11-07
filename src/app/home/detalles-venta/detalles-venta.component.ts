import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../shared/home.service';
import { Item, Venta } from '../shared/venta.model';

@Component({
  selector: 'app-detalles-venta',
  templateUrl: './detalles-venta.component.html',
  styleUrls: []
})
export class DetallesVentaComponent implements OnInit {

  venta!: Venta;

  constructor(
    private homeService : HomeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const idVenta= parseInt(this.route.snapshot.paramMap.get("id")!);
    this.homeService.getVenta(idVenta)
    .subscribe(venta => this.venta = venta);
  }

  descargarArchivo(item: Item){
    this.homeService.descargarArchivo(item)
    .subscribe(blob => {
      const a = document.createElement('a');
      const objectUrl = URL.createObjectURL(blob);
      a.href = objectUrl;
      a.download = item.libro.titulo+".pdf";
      a.click();
      URL.revokeObjectURL(objectUrl);

      item.numeroDescargasDisponibles--;
    });
  }

}
