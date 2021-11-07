import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../shared/auth.service";

@Injectable()
export class AuthIntercerptor implements HttpInterceptor {
    
    constructor(
        private authService : AuthService
    ){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const token= this.authService.getToken();
        if(token){
            const cloned = req.clone({
                headers : req.headers.set('Authorization', `Bearer ${token}`)
            })
            return next.handle(cloned);
        }else{
            return next.handle(req);
        }
    };
}
