import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-new-usuario',
  templateUrl: './new-usuario.component.html',
  styleUrls: []
})
export class NewUsuarioComponent implements OnInit {



  constructor(
    private usuarioService:UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  create(usuario:any){
     this.usuarioService.guardar(usuario).
     subscribe(data => {
      this.router.navigate(['admin','usuarios'])
     });
  }

}
