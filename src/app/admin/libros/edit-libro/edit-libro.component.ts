import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from '../shared/libro.service';

@Component({
  selector: 'app-edit-libro',
  templateUrl: './edit-libro.component.html',
  styleUrls: []
})
export class EditLibroComponent implements OnInit {
  
  libro: any;

  constructor(
    private route: ActivatedRoute,
    private libroService: LibroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get("id")!);
    this.libroService.get(id)
    .subscribe(data => this.libro =  data);
  }


  update(libro:any) {
    this.libroService.update(this.libro.id,libro)
    .subscribe(data => this.router.navigate(['admin/libros']));
  }

}
