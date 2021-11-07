import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouteReuseStrategy } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

  returnUrl: string = "/";
  error: boolean = false;

  credentials = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(form: NgForm){
    if(form.form.invalid){
      return;
    }

    console.log(this.credentials.email)
    console.log(this.credentials.password)
    this.authService.login(this.credentials.email,this.credentials.password)
    .subscribe(() =>{
      this.router.navigate([this.returnUrl]);
    },error => {
      this.error = true;
    });
  }
}
