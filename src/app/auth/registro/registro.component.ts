import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { EmailUnicoValidator } from '../shared/email-unico.validator';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: []
})
export class RegistroComponent implements OnInit {

  error? : string ;
  hidePassword : boolean = true;

  form : FormGroup  = this.fb.group({
    email : [,[Validators.required,Validators.email],[this.emailUnicoValidator]],
    nombres: [,[Validators.required]],
    apellidos: [,[Validators.required]],
    passwordPlain: [,[Validators.required,Validators.minLength(4)]]
  });

  constructor(
    private fb: FormBuilder,
    private emailUnicoValidator: EmailUnicoValidator,  //validador asyncrono creado por mi
    private router: Router,
    private snackBar: MatSnackBar,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  registrar(){
    if(this.form.invalid){
      return;
    }

    const registroValues = this.form.value;
    
    console.log("",registroValues);

    this.authService.registrar(registroValues)
    .subscribe(() => {
      this.authService.login(registroValues['email'],registroValues['passwordPlain'])
      .subscribe((response:any )=> {
        this.router.navigate(["/"]);

        this.snackBar.open(`Bienvenido ${response['name']}`,'Cerrar',{
          duration: 5 * 100,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        })
      })
    },error => {
      this.error =  error.error.message;
    })

  }

}
