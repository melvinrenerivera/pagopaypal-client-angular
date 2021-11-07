import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, zip } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LibroPage } from './libro.model';

//los services se inyectan de forma general no por modulo. y como es root no es necesario definirlo
//o importarlo
@Injectable({
  providedIn: 'root'
})
export class LibroService  {

  private apiBase: string  = environment.apiBase;

  constructor(private http: HttpClient) { }

  getAll(page:number = 0, size: number = 5): Observable<LibroPage>{
    let params = new HttpParams();
    params = params.append("page",page);
    params = params.append("size",size);
    params = params.append("sort","fechaCreacion,desc");

    return this.http.get<LibroPage>(this.apiBase+"/admin/libros",{params : params});
  }

  create(libro:any){
   return this.http.post(this.apiBase+"/admin/libros",libro);
  }

  update(id: number,libro:any){
    return this.http.put(this.apiBase+"/admin/libros/"+id,libro);
   }

  delete(id: number){
    return this.http.delete(this.apiBase+"/admin/libros/"+id);
  }

  get(id:number){
    return this.http.get(this.apiBase+"/admin/libros/"+id)
  }

  uploadfile(formData: FormData){
    return this.http.post(this.apiBase+'/assets/upload',formData);
  }

}
