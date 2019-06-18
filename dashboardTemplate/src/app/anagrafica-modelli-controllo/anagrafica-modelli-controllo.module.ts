import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { AnagraficaModelliControlloComponent } from './anagrafica-modelli-controllo.component';
import { AnagraficaModelliControlloRoutes } from './anagrafica-modelli-controllo.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AnagraficaModelliControlloRoutes),
        FormsModule
    ],
    declarations: [AnagraficaModelliControlloComponent]
})

export class AnagraficaModelliControlloModule {}
