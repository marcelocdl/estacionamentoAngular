import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  constructor(
    private loginService: LoginService
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const usuario_logado = this.loginService.usuarioLogado();

    if(usuario_logado){
      const authRequest = req.clone(
        {setHeaders:{'Authorization':'Bearer '+usuario_logado.token}}
      );

      return next.handle(authRequest);
    }else{
      return next.handle(req);
    }

  }
}
