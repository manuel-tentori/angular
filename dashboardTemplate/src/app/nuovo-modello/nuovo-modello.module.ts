import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { NuovoModelloComponent } from './nuovo-modello.component';
import { NuovoModelloRoutes } from './nuovo-modello.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(NuovoModelloRoutes),
        FormsModule
    ],
    declarations: [NuovoModelloComponent]
})

export class NuovoModelloModule {}
