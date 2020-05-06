import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-in-movs',
  templateUrl: './in-movs.component.html',
  styleUrls: ['./in-movs.component.css']
})
export class InMovsComponent implements OnInit {

  constructor() { this.contar(5) }

  date = new FormControl(new Date());
  options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['X-1', 'X-2', 'X-3', 'X-4', 'X-5']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'X-1',
        type: 'line',
        stack: 'counts',
        areaStyle: { normal: {} },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'X-2',
        type: 'line',
        stack: 'counts',
        areaStyle: { normal: {} },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'X-3',
        type: 'line',
        stack: 'counts',
        areaStyle: { normal: {} },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'X-4',
        type: 'line',
        stack: 'counts',
        areaStyle: { normal: {} },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'X-5',
        type: 'line',
        stack: 'counts',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        areaStyle: { normal: {} },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };

  t1Columns: string[] = ['orden', 'material', 'version', 'hora', 'codigoTPM', 'grupoTPM', 'contadorInicial', 'contadorFinal', 'diferencia', 'descripcion'];
  t2Columns: string[] = ['orden proceso', 'material', 'mano de obra ', 'sobreDotacion'];
  t3Columns: string[] = ['Grupo TMP', 'Tiempo'];
  t4Columns: string[] = ['material', 'ver', 'produccion', 'can areas salida', 'kg Repro', '%SobrePeso Mix', '%SobrePeso Costo Mix', '%Repro'];
  t5Columns: string[] = ['material', 'KG esperados x turno','KG Producidos X turno', 'Prom Unidad X T', 'Velocidad Protocolo Base', 'Velocidad Real'];

  t1 = [];
  t2 = [];
  t3 = [];
  t4 = [];
  t5 = [];

  contar(i: number) {
    for (let pos = 1; pos <= i; pos++) {

      var Columns = this["t" + pos + "Columns"];
      const _model = {};

      for (let index = 0; index < Columns.length; index++) {
        _model[Columns[index]] = '' + index;
      }
      this["t" + pos].push(_model);
    }

  }


  ngOnInit(): void {



  }

}
