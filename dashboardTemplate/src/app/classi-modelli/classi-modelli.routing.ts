import { Routes } from '@angular/router';

import { ClassiModelliComponent } from './classi-modelli.component';

export const ClassiModelliRoutes: Routes = [{
    path: '',
    children: [{
        path: '',
        component: ClassiModelliComponent
    }]
}];