import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { UsuarioPage } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: []
})
export class ListUsuarioComponent implements OnInit {


  usuarioPage!: UsuarioPage;
  displayedColumns: string[] = ["nombre","apellido","email","fechaCreacion","fechaActualizacion","Acciones"];

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.index();
  }

  index(){
    this.usuarioService.getAll()
    .subscribe(data => {
      console.log(data);
      return this.usuarioPage = data
    });
  }

  delete(id: number){
    const ok = confirm("Esta seguro de eliminar el usuario");
    if(ok){
      this.usuarioService.delete(id).
      subscribe( data =>  this.index());
    }   
  }


  onPaginateChange(event : PageEvent){
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;

    this.usuarioService.getAll(pageIndex,pageSize)
    .subscribe(data => {
      console.log(data);
      return this.usuarioPage = data
    });
  }

}
