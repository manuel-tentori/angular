import { Routes } from '@angular/router';

import { NuovoModelloComponent } from './nuovo-modello.component';

export const NuovoModelloRoutes: Routes = [{
    path: '',
    children: [{
        path: '',
        component: NuovoModelloComponent
    }]
}];