import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { ClassiModelliComponent } from './classi-modelli.component';
import { ClassiModelliRoutes } from './classi-modelli.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ClassiModelliRoutes),
        FormsModule
    ],
    declarations: [ClassiModelliComponent]
})

export class ClassiModelliModule {}
