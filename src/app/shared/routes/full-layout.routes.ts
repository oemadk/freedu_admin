import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from '../../services/services.component';
import { UsersComponent } from '../../users/users.component';
import { NewordersComponent } from '../../neworders/neworders.component';
import { InprogressordersComponent } from '../../inprogressorders/inprogressorders.component';
import { DoneordersComponent } from '../../doneorders/doneorders.component';
import { PackagesComponent } from '../../packages/packages.component';
import { InvoiceComponent } from '../../invoice/invoice.component';
import { ReportComponent } from '../../report/report.component';
import { SmellsComponent } from '../../smells/smells.component';
import { ItemsComponent } from '../../items/items.component';
import { OrderpageComponent } from '../../orderpage/orderpage.component'; 
import { LabelComponent } from '../../label/label.component'; 
import { OperatorsComponent } from '../../operators/operators.component'; 
import { OperatordeliveryComponent } from '../../operatordelivery/operatordelivery.component';
import { OperatorcustomersComponent } from '../../operatorcustomers/operatorcustomers.component';
import { OperatorwashingComponent } from '../../operatorwashing/operatorwashing.component';
import { OperatorironingComponent } from '../../operatorironing/operatorironing.component'; 
import { OperatorlabelingComponent } from '../../operatorlabeling/operatorlabeling.component'; 

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },{
    path: 'services',
    component: ServicesComponent
  },{
    path: 'operator/delivery',
    component: OperatordeliveryComponent
  },{
    path: 'operator/customer',
    component: OperatorcustomersComponent
  },{
    path: 'operator/washing',
    component: OperatorwashingComponent
  },{
    path: 'operator/ironing',
    component: OperatorironingComponent
  },{
    path: 'operator/labeling',
    component: OperatorlabelingComponent
  }, 
    {
    path: 'operators',
    component: OperatorsComponent
  }, 
  {
    path: 'label/:id',
    component: LabelComponent
  },     
  {
    path: 'orderpage/:id',
    component: OrderpageComponent
  },   
  {
    path: 'items',
    component: ItemsComponent
  },
  {
    path: 'smells',
    component: SmellsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
    {
    path: 'orders/new',
    component: NewordersComponent
  },
    {
    path: 'orders/in-progress',
    component: InprogressordersComponent
  },
    {
    path: 'orders/completed',
    component: DoneordersComponent
  },
    {
    path: 'packages',
    component: PackagesComponent
  },
  {
    path: 'report',
    component: ReportComponent
  },
  {
    path: 'calendar',
    loadChildren: './calendar/calendar.module#CalendarsModule'
  },
  {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsNg2Module'
  },
  {
    path: 'forms',
    loadChildren: './forms/forms.module#FormModule'
  },
  {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule'
  },
  {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule'
  },
  {
    path: 'datatables',
    loadChildren: './data-tables/data-tables.module#DataTablesModule'
  },
  {
    path: 'uikit',
    loadChildren: './ui-kit/ui-kit.module#UIKitModule'
  },
  {
    path: 'components',
    loadChildren: './components/ui-components.module#UIComponentsModule'
  },
  {
    path: 'pages',
    loadChildren: './pages/full-pages/full-pages.module#FullPagesModule'
  },
  {
    path: 'cards',
    loadChildren: './cards/cards.module#CardsModule'
  },
  {
    path: 'colorpalettes',
    loadChildren: './color-palette/color-palette.module#ColorPaletteModule'
  },
  {
    path: 'chat',
    loadChildren: './chat/chat.module#ChatModule'
  },
  {
    path: 'inbox',
    loadChildren: './inbox/inbox.module#InboxModule'
  },
  {
    path: 'taskboard',
    loadChildren: './taskboard/taskboard.module#TaskboardModule'
  },
  {
    path: 'player',
    loadChildren: './player/player.module#PlayerModule'
  }
];