import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/service/login.service';

@Component({
  selector: 'app-menu-navbar',
  templateUrl: './menu-navbar.component.html',
  styleUrls: ['./menu-navbar.component.css']
})
export class MenuNavbarComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.loginService.logout();
  }

}
