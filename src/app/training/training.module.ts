import { NgModule } from '@angular/core';

import { TrainingRoutingModule } from './training-routing.module';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { TrainingComponent } from './training.component';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [TrainingRoutingModule, MaterialModule, CommonModule],
    declarations: [CurrentTrainingComponent, PastTrainingsComponent, NewTrainingComponent, TrainingComponent]
})
export class TrainingModule {

}