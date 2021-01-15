import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TableComponent} from './table/table.component';


const routes: Routes = [{path: 'appearances', component: TableComponent, data : {spread: "app"}},
                        {path: 'dashboard', component: DashboardComponent},
                        {path: 'asm', component: TableComponent, data : {spread: "asm"}},
                        {path: '', redirectTo: '/dashboard', pathMatch: 'full'}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
