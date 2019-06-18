import { Routes } from '@angular/router';

import { AnagraficaSocietaComponent } from './anagrafica-societa.component';

export const AnagraficaSocietaRoutes: Routes = [{
    path: '',
    children: [{
        path: '',
        component: AnagraficaSocietaComponent
    }]
}];
