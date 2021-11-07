import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item, Venta, VentaPage } from 'src/app/home/shared/venta.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  apiBase = environment.apiBase;

  constructor(
    private http: HttpClient
  ) { }

  getVentas(){

    let token="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtZWx2aW4ycm1AZ21haWwuY29tIiwiZXhwIjoxNjM4MDgxNDE5LCJyb2xlIjoiQURNSU4iLCJuYW1lIjoibGltcGlhbmRvIG5vbWJyZSIsInVzZXJJZCI6MjAsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iXX0.rKLAt4T-j3gueTjd5ThHilp0R6Ho0IT_iyc_wmplSlY1RJ8H-H6JK2A9_3_jSJHCsoWva5WI7T3hp9TbAyjmSQ";

    let params = new HttpParams();
    params =  params.append("Authorization",'Bearer '+token);
    return this.http.get<VentaPage>(this.apiBase+"/admin/ventas",{params});
  }

  getVenta(id: number){
    return this.http.get<Venta>(this.apiBase+"/detalles-venta/"+id);
  }

  resetDowload(detalleVenta: Item){
    return this.http.put(this.apiBase+"/admin/ventas/detalles-venta",detalleVenta);
  }
}
