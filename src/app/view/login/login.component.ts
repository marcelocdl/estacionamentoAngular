import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/core/model/usuario';
import { LoginService } from 'src/app/core/service/login.service';
import { TesteService } from 'src/app/core/service/teste.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = this.formBuilder.group(
    {
      login: this.formBuilder.control('',[Validators.required, Validators.minLength(3)]),
      senha: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
    });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) { }


  ngOnInit(): void {

  }

  logar(){
    
    if(this.formLogin.valid){

      let email = this.formLogin.value.login;
      let senha = this.formLogin.value.senha;

      this.loginService.login(new Usuario(email, senha, '', '')).subscribe( u => {
        this.loginService.setarUsuarioLogado(u);
        this.router.navigate(['principal/home']);
        
      })

    }else{
        alert('Preencha os campos corretamente! ')
    }
  }

}
