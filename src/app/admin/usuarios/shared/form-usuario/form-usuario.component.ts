import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: []
})
export class FormUsuarioComponent implements OnInit {

  @Input()  usuario:any;
  @Output() onSubmit : EventEmitter<any> = new EventEmitter;

  form! : FormGroup;
  roles: string[] = ['ADMIN','LECTOR'];

  constructor(
    private usuarioService:UsuarioService,
    private router: Router,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombres: [this.usuario?.nombres,[Validators.required]],
      apellidos: [this.usuario?.apellidos,[Validators.required]],
      email: [this.usuario?.email,[Validators.required]],
      rol: [this.usuario?.rol,[Validators.required]],
      password: [this.usuario?.password,[Validators.required]]
    });
  }

  save(){
    this.onSubmit.emit(this.form.value);
  }

}
