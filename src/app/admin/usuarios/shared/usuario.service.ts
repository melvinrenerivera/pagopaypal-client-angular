import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsuarioPage } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiBase: string = environment.apiBase;

  constructor(private http:HttpClient) { }

  getAll(page: number = 0, size : number = 5): Observable<UsuarioPage>{

    let params = new HttpParams();
    params =  params.append("page",page);
    params = params.append("size",size);
    params = params.append("sort","fechaCreacion,desc");
    return this.http.get<UsuarioPage>(this.apiBase+'/admin/usuarios',{params});

  }

  get(id: number){
    return this.http.get(this.apiBase+'/admin/usuarios/'+id);
  }

  guardar(usuario: any){
    return this.http.post(this.apiBase+'/admin/usuarios',usuario);
  }

  update(id: number, usuario: any){
     return this.http.put(this.apiBase+'/admin/usuarios/'+id,usuario);
  }

  delete(id: number){
    return this.http.delete(this.apiBase+"/admin/usuarios/"+id);
  }

}
