import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { InvoicesComponent } from 'src/app/modules/invoices/invoices.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module'; 
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    InvoicesComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule
  ]
})
export class DefaultModule { }