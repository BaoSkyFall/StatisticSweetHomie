import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { InvoicesComponent } from './modules/invoices/invoices.component';

const routes : Routes =[{
    path: '',
    component : DefaultComponent,
    children: [{
        path: '',
        component: DashboardComponent
    },{
        path:'invoices',
        component: InvoicesComponent
    }]
}]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingMoudle{}