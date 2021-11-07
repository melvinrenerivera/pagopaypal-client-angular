import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { LibroPage } from '../shared/libro.model';
import { LibroService } from '../shared/libro.service';

@Component({
  selector: 'app-libro-list',
  templateUrl: './libro-list.component.html',
  styleUrls: []
})
export class LibroListComponent implements OnInit {

 
  displayedColumns: string[] = [ "titulo", "precio", "fechaCreacion", "acciones"];
  libroPage! : LibroPage;

  constructor(private libroService: LibroService){

  }

  ngOnInit(): void {
   this.getAll();
  }

  getAll(){
    this.libroService.getAll().subscribe(data => { 
      this.libroPage = data;
   });
  }

  delete(libro:any){
    const ok = confirm("Esta seguro de eliminar el libro");

    if(ok){
      this.libroService.delete(libro.id)
      .subscribe(() => {
        this.getAll();
      });
    }   
  }

  onPaginateChange(event : PageEvent){
    console.log(event);
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;

    this.libroService.getAll(pageIndex,pageSize).subscribe(data => { 
      this.libroPage = data;
   });
  }

}
