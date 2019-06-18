import { Routes } from '@angular/router';

import { AnagraficaModelliControlloComponent } from './anagrafica-modelli-controllo.component';

export const AnagraficaModelliControlloRoutes: Routes = [{
    path: '',
    children: [{
        path: '',
        component: AnagraficaModelliControlloComponent
    }]
}];