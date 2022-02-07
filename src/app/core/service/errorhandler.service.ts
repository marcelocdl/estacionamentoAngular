import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandlerService implements ErrorHandler {

  constructor(
    private loginService: LoginService,
    private ngZone: NgZone
  ) {
    
  }
  handleError(error: HttpErrorResponse | any): void {
    
    if(error instanceof HttpErrorResponse){
     /* console.log(error.status);
      console.log(error.error);
      console.log(error.message);
      console.log(error.url);  */

      switch(error.status){
        case 400:
          alert(error.error);
          break;
        case 401:
          alert("Sessão Expirada")
          this.ngZone.run( ()=>{
            this.loginService.logout();
          })
          break;
        case 403:
          alert("Acesso Negado");
          break;
      }

    }
  }
}
