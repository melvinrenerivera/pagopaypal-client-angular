import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from 'src/app/admin/libros/shared/libro.model';
import { CarritoService } from '../shared/carrito.service';
import { Venta } from '../shared/venta.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: []
})
export class CarritoComponent implements OnInit {

  loading : boolean = false;

  constructor(
    private carritoService: CarritoService,
    private route :ActivatedRoute,
    private rotuer : Router
  ) { }

  ngOnInit(): void { // cuando nos retorna a nuestra aplicacion angular este componente se vuelve a crear
      const token = this.route.snapshot.queryParamMap.get("token");
      if(token){
         this.loading = true;
         this.carritoService.ejecutarPagoPayPal(token)
         .subscribe((result : any) => {
           this.loading = false;
           if(result['success']){
              this.carritoService.removerItems();
              this.rotuer.navigate(['/detalles-venta',result['venta']['id']]);
           }
         });
      }
  }

  get items(){
    return this.carritoService.items;
  }

  removerLibro(libro : Libro){
    this.carritoService.removerItem(libro);
  }

  get total(){
    return this.carritoService.items.map(i => i.precio).reduce((a,b) => a + b, 0);
  }

  pagar(){
    if(this.loading) return ;

    this.loading = true ;
    this.carritoService.solicitarPagoPayPal()
    .subscribe((result: any) =>{
      window.location = result['url'];
    })
    
  }
}
