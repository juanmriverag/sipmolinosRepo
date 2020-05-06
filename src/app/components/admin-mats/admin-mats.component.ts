import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

export interface Materiales {
  Material: string;
  Descripcion: string;
  TipoMaterial: string;
  Version: string;
  VersionSAP: string;
  UMB: string;
  ResControlProd: string;
  GrupoPlanificador: string;

}

const ELEMENT_DATA: Materiales[] = [
  { Material: '101010', Descripcion: 'MANTENIMENTO', TipoMaterial: 'SEMIRECOGIDAS', Version: '2', VersionSAP: '2', UMB: 'PQ', ResControlProd: 'GN10', GrupoPlanificador: 'GN10' },
  { Material: '1006162', Descripcion: 'GTA NAVIDAD HOLLIDAY COOKIES', TipoMaterial: 'TERMINADO', Version: '1', VersionSAP: '1', UMB: 'UN', ResControlProd: 'N17', GrupoPlanificador: 'IDI' },
  { Material: '7001142', Descripcion: 'PRODIFRUIT FRESA', TipoMaterial: 'TERMINADO', Version: '1', VersionSAP: '1', UMB: 'KG', ResControlProd: 'N17', GrupoPlanificador: 'LOGI' },
  { Material: '7001678', Descripcion: 'SABOR COCO LIMON', TipoMaterial: 'TERMINADO', Version: '1', VersionSAP: '1', UMB: 'KG', ResControlProd: 'N17', GrupoPlanificador: 'LOGI' },
  { Material: '7002639', Descripcion: 'HARINA DE LINAZA', TipoMaterial: 'TERMINADO', Version: '1', VersionSAP: '1', UMB: 'KG', ResControlProd: 'N17', GrupoPlanificador: 'LOGI' },
  { Material: '8012803', Descripcion: 'CJA DUC TACOX4 520G MAYORISTAS IMP KRAFT', TipoMaterial: 'TERMINADO', Version: '1', VersionSAP: '1', UMB: 'KG', ResControlProd: 'N17', GrupoPlanificador: 'LOGI' },
  { Material: '101010', Descripcion: 'MANTENIMENTO', TipoMaterial: 'SEMIRECOGIDAS', Version: '0', VersionSAP: '0', UMB: 'PQ', ResControlProd: 'N17', GrupoPlanificador: 'STC' },
  { Material: '3001174', Descripcion: 'HARINA MAQUILA NOEL SAL', TipoMaterial: 'TERMINADO', Version: '1', VersionSAP: '1', UMB: 'KG', ResControlProd: 'N17', GrupoPlanificador: 'Z180' },
  { Material: '3001601', Descripcion: 'CHIPS MINI NOEL CJAX22.5KG', TipoMaterial: 'TERMINADO', Version: '1', VersionSAP: '1', UMB: 'KG', ResControlProd: 'N17', GrupoPlanificador: 'Z180' },
  { Material: '3001782', Descripcion: 'SALVADO DE TRIGO X 25 KG MS', TipoMaterial: 'SEMIPASTA', Version: '1', VersionSAP: '1', UMB: 'KG', ResControlProd: 'N17', GrupoPlanificador: 'Z180' },
  { Material: '7000422', Descripcion: 'Pirofosfato acido de sodio', TipoMaterial: 'SEMIPASTA', Version: '1', VersionSAP: '1', UMB: 'KG', ResControlProd: 'N17', GrupoPlanificador: 'Z180' },
  { Material: '7000503', Descripcion: 'Sal yodada', TipoMaterial: 'SEMIPASTA', Version: '1', VersionSAP: '1', UMB: 'KG', ResControlProd: 'N17', GrupoPlanificador: 'Z180' },
  { Material: '7001048', Descripcion: 'Oleina de palma', TipoMaterial: 'SEMIPASTA', Version: '1', VersionSAP: '1', UMB: 'KG', ResControlProd: 'N17', GrupoPlanificador: 'Z180' },
  { Material: '7001049', Descripcion: 'Acido citrico', TipoMaterial: 'SEMIPASTA', Version: '1', VersionSAP: '1', UMB: 'KG', ResControlProd: 'N17', GrupoPlanificador: 'Z180' },

];

@Component({
  selector: 'app-admin-mats',
  templateUrl: './admin-mats.component.html',
  styleUrls: ['./admin-mats.component.css']
})
export class AdminMatsComponent implements OnInit {

  displayedColumns: string[] = ['Material', 'Descripcion', 'TipoMaterial', 'Version', 'VersionSAP', 'UMB', 'ResControlProd', 'GrupoPlanificador'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: Materiales[] = ELEMENT_DATA;
 TooltipPos =  'below';
  constructor(private appComponent : AppComponent) {
    this.appComponent.title = 'Administración de materiales'
   }




  panelOpenState = false;



  ngOnInit(): void {
    $.getScript('../../assets/perfect-scrollbar/perfect-scrollbar.min.js');
    $.getScript('../../assets/perfect-scrollbar/perfectEject.js');

  }

}
