import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro, LibroPage } from 'src/app/admin/libros/shared/libro.model';
import { environment } from 'src/environments/environment';
import { Item, Venta } from './venta.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiBase: string = environment.apiBase;

  constructor(
    private http:HttpClient
  ) { }

  getUltimoLibros(){
    return this.http.get<Libro[]>(this.apiBase+"/ultimos-libros");
  }

  getLibros(page : number = 0, size : number =5){
    let params = new HttpParams();
    params = params.append("page",page);
    params = params.append("size",size);
    params = params.append("sort","fechaCreacion,desc");

    return this.http.get<LibroPage>(this.apiBase+"/libros",{params : params})
  }

  getLibro(slug : string){
    return this.http.get<Libro>(this.apiBase+"/libros/"+slug);
  }

  getVenta(id: number){
    return this.http.get<Venta>(this.apiBase+"/detalles-venta/"+id);
  }

  //return a arhcivo binario
  descargarArchivo(item : Item){
    return this.http.get(this.apiBase+"/descargar-archivo/"+item.id,
    {responseType : 'blob'})
  }
}
