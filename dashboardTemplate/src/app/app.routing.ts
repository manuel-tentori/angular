import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { ProgettiComponent } from './progetti/progetti.component';

export const AppRoutes: Routes = [{
        path: '',
        redirectTo: 'progetti',
        pathMatch: 'full',
    },{
        path: '',
        component: AdminLayoutComponent,
        children: [/*{
            path: 'dashboard',
            loadChildren: './dashboard/dashboard.module#DashboardModule'
        },{
            path: 'components',
            loadChildren: './components/components.module#ComponentsModule'
        },{
            path: 'forms',
            loadChildren: './forms/forms.module#Forms'
        },{
            path: 'tables',
            loadChildren: './tables/tables.module#TablesModule'
        },{
            path: 'maps',
            loadChildren: './maps/maps.module#MapsModule'
        },{
            path: 'charts',
            loadChildren: './charts/charts.module#ChartsModule'
        },{
            path: 'calendar',
            loadChildren: './calendar/calendar.module#CalendarModule'
        },{
            path: '',
            loadChildren: './userpage/user.module#UserModule'
        },{
            path: '',
            loadChildren: './timeline/timeline.module#TimelineModule'
        },*/{
            path: 'anagraficasocieta',
            loadChildren: './anagrafica-societa/anagrafica-societa.module#AnagraficaSocietaModule'
        },{
            path: 'anagraficamodellicontrollo',
            loadChildren: './anagrafica-modelli-controllo/anagrafica-modelli-controllo.module#AnagraficaModelliControlloModule'
        },{
            path: 'classimodelli',
            loadChildren: './classi-modelli/classi-modelli.module#ClassiModelliModule'
        },{
            path: 'nuovomodello',
            loadChildren: './nuovo-modello/nuovo-modello.module#NuovoModelloModule'
        },
        {
            path: 'progetti',
            component: ProgettiComponent
        }
        ]
        },{
            path: '',
            component: AuthLayoutComponent,
            children: [{
                path: 'pages',
                loadChildren: './pages/pages.module#PagesModule'
            }]
        }
];
