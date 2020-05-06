import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminMatsComponent } from './components/admin-mats/admin-mats.component';
import { InMovsComponent } from './components/in-movs/in-movs.component';
import { InCalidadComponent } from './components/in-calidad/in-calidad.component';
import { AdminTivasComponent } from './components/admin-tivas/admin-tivas.component';
import { AdminTivas2Component } from './components/admin-tivas2/admin-tivas2.component';

const routes: Routes = [
  { path: '', redirectTo: '/admin-mats', pathMatch: 'full' },
  { path: 'admin-mats', component: AdminMatsComponent },
  { path: 'in-calidad', component: InCalidadComponent },
  { path: 'in-movs', component: InMovsComponent },
  { path: 'admin-tivas', component: AdminTivasComponent },
  { path: 'admin-tivas2', component: AdminTivas2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
