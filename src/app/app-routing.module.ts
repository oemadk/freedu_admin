import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { InvoiceComponent } from "./invoice/invoice.component";
import { LoginPageComponent } from "./pages/content-pages/login/login-page.component";

import { Full_ROUTES } from "./shared/routes/full-layout.routes";
import { CONTENT_ROUTES } from "./shared/routes/content-layout.routes";
import { OrderpageComponent } from './orderpage/orderpage.component'; 
import { OperatorsComponent } from './operators/operators.component'; 
import { OperatordeliveryComponent } from './operatordelivery/operatordelivery.component';
import { OperatorcustomersComponent } from './operatorcustomers/operatorcustomers.component';
import { OperatorwashingComponent } from './operatorwashing/operatorwashing.component';
import { OperatorironingComponent } from './operatorironing/operatorironing.component'; 


const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component:LoginPageComponent
  },
    {
    path: 'invoice',
    pathMatch: 'full',
    component:InvoiceComponent
  },
  { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES },
  { path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}