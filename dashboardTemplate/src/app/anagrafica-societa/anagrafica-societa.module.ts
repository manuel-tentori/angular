import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { AnagraficaSocietaComponent } from './anagrafica-societa.component';
import { AnagraficaSocietaRoutes } from './anagrafica-societa.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AnagraficaSocietaRoutes),
        FormsModule
    ],
    declarations: [AnagraficaSocietaComponent]
})

export class AnagraficaSocietaModule {}
