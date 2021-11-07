import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibroService } from '../shared/libro.service';

@Component({
  selector: 'app-new-libro',
  templateUrl: './new-libro.component.html',
  styleUrls: []
})
export class NewLibroComponent implements OnInit {

  constructor(
    private libroService: LibroService,
    private router: Router
    ) {

     }

   

  ngOnInit(): void {
   
  }

  create(libro : any){
    this.libroService.create(libro)
    .subscribe(data => {
      this.router.navigate(['admin','libros']);
    },error => {
      console.log(error);
      if(error.status == 422){
       // this.errors = error.error.errores;
      }
    });
  }





}
