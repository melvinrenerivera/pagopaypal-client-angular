import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from 'src/app/admin/libros/shared/libro.model';
import { environment } from 'src/environments/environment';
import { Venta } from './venta.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private apiBase: string = environment.apiBase;
  private _items : Libro[] = [];

  constructor(
    private http : HttpClient
  ) {
    const carritoString = localStorage.getItem("app_carrito");
    this._items = carritoString ? JSON.parse(carritoString) : [] ;
   }

  get items(){
    return this._items;
  }

  agregarItem(libro : Libro){

    this._items.push(libro);
    localStorage.setItem("app_carrito",JSON.stringify(this._items));
  }

  removerItem(libro : Libro){
    this._items = this._items.filter(item => item.id !== libro.id);
    localStorage.setItem("app_carrito",JSON.stringify(this._items));
  }

  removerItems(){
    this._items = [];
    localStorage.setItem("app_carrito",JSON.stringify(this._items));
  }

  itemYaExiste(libro : Libro){
    return this._items.findIndex(item => item.id === libro.id) >= 0; // funcion retorna el indice apartir del 0
  }

  solicitarPagoPayPal(){
      return this.http.post(this.apiBase+"/pago-paypal?returnUrl=http://localhost:4200/carrito",this.items.map(i => i.id));
  }

  ejecutarPagoPayPal(token: string ){
    return this.http.get(this.apiBase+"/pago-paypal/ejecutar?token="+token)
  }

}
