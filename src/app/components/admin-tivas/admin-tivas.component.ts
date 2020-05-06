import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-admin-tivas',
  templateUrl: './admin-tivas.component.html',
  styleUrls: ['./admin-tivas.component.css']
})
export class AdminTivasComponent implements OnInit {

  constructor(private appComponent : AppComponent) {
    this.appComponent.title = 'Administración rutas activas'}

  ngOnInit(): void {
  }

}
