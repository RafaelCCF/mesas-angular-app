import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { MESAS } from '../lista-mesas';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-listar-mesas',
  templateUrl: './listar-mesas.component.html',
  styleUrls: ['./listar-mesas.component.css']
})
export class ListarMesasComponent implements OnInit {
  url = '';
  listaMesas = MESAS;

  constructor(private http: HttpClient) { 
  }

  get Prueba(): Observable<any>{
    return this.http.get(this.url);
  }
  ngOnInit() {
  }

}
