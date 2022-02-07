import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/core/model/vaga';
import { VagasService } from 'src/app/core/service/vagas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  vagas?: Vaga[] = [];

  constructor(
    private vagasService: VagasService,
  ) { }

  ngOnInit(): void {
    this.getVagas();
  }

  getVagas(){
    this.vagasService.getVagas().subscribe( vaga => {
      this.vagas = vaga;
    });
  }

}
