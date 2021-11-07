import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { CarritoService } from '../shared/carrito.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: []
})
export class LayoutComponent implements OnInit {

  user : string = '';

  constructor(
    private carritoSerevice: CarritoService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.authService.getName();
  }

  get items(){
    return this.carritoSerevice.items; // como estamos usando una palabra reservada de typescript podemos acceder como si fuera una vairablee
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  isAdmin(){
    return this.authService.isAmdin();
  }

}
