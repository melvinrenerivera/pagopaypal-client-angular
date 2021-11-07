import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: []
})
export class EditUsuarioComponent implements OnInit {

  usuario: any;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get("id")!);
    this.usuarioService.get(id)
    .subscribe(data => this.usuario =  data);
  }

  update(usuario : any) {
    this.usuarioService.update(this.usuario.id,usuario)
    .subscribe(data => this.router.navigate(['admin/usuarios']));
  }

}
