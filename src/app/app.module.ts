
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";

import { CustomOption } from "./shared/toastr/custom-option";

import * as $ from 'jquery';
import { ServicesComponent } from './services/services.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UsersComponent } from './users/users.component';
import { NewordersComponent } from './neworders/neworders.component';
import { InprogressordersComponent } from './inprogressorders/inprogressorders.component';
import { DoneordersComponent } from './doneorders/doneorders.component';
import { PackagesComponent } from './packages/packages.component';
import { ReportComponent } from './report/report.component';
import { InvoiceComponent } from './invoice/invoice.component';

import { LoginPageComponent } from "./pages/content-pages/login/login-page.component";
import { SmellsComponent } from './smells/smells.component';
import { ItemsComponent } from './items/items.component';
import {AuthenticationService} from './serviceprovider/authentication.service';
import {UserService} from './serviceprovider/user.service';
import {OrderService} from './serviceprovider/order.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { LabelComponent } from './label/label.component';
import { OperatorsComponent } from './operators/operators.component';
import { OperatordeliveryComponent } from './operatordelivery/operatordelivery.component';
import { OperatorcustomersComponent } from './operatorcustomers/operatorcustomers.component';
import { OperatorwashingComponent } from './operatorwashing/operatorwashing.component';
import { OperatorironingComponent } from './operatorironing/operatorironing.component';
import { OperatorlabelingComponent } from './operatorlabeling/operatorlabeling.component';
import { LabelitemsComponent } from './labelitems/labelitems.component'; 

@NgModule({
    declarations: [
        AppComponent,
        FullLayoutComponent,
        ContentLayoutComponent,
        ServicesComponent,
        UsersComponent,
        NewordersComponent,
        InprogressordersComponent,
        DoneordersComponent,
        PackagesComponent,
        ReportComponent,
        InvoiceComponent,
        LoginPageComponent,
        SmellsComponent,
        ItemsComponent,
        OrderpageComponent,
        LabelComponent,
        OperatorsComponent,
        OperatordeliveryComponent,
        OperatorcustomersComponent,
        OperatorwashingComponent,
        OperatorironingComponent,
        OperatorlabelingComponent,
        LabelitemsComponent,


    ],
    imports: [
    HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
                NgxDatatableModule,

        ToastModule.forRoot(),
        NgbModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBr5_picK8YJK7fFR2CPzTVMj6GG1TtRGo'
        }),
            FormsModule,    //added here too
    ReactiveFormsModule //added here too
    ],
    providers: [
        //Toastr providers
           AuthenticationService, UserService, OrderService,
        { provide: ToastOptions, useClass: CustomOption}
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }