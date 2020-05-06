import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

export interface Materiales {
  SalidaMaxima: string;
  Recurso: string;
  DesRecurso: string;
  EquiposRecurso: string;
  VelocidadMinuto: string;
  OperariosRecurso: string;
  CantidadBase: string;
  FlujoMaximo: string;
  UMB: string;

}

const ELEMENT_DATA: Materiales[] = [
  { SalidaMaxima: '1', Recurso: '1', DesRecurso: '1', EquiposRecurso: '1', VelocidadMinuto: '1', OperariosRecurso: '1', CantidadBase: '1', FlujoMaximo: '1', UMB: '1' }
];

@Component({
  selector: 'app-admin-tivas2',
  templateUrl: './admin-tivas2.component.html',
  styleUrls: ['./admin-tivas2.component.css']
})
export class AdminTivas2Component implements OnInit {

  displayedColumns: string[] = ['SalidaMaxima', 'Recurso', 'DesRecurso', 'EquiposRecurso', 'VelocidadMinuto', 'OperariosRecurso', 'CantidadBase', 'FlujoMaximo', 'UMB'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: Materiales[] = ELEMENT_DATA;

  constructor(private appComponent : AppComponent) {
    this.appComponent.title = 'Administración rutas activas 2'}

  ngOnInit(): void {
  }

}
