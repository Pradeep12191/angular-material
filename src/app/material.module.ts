import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule, MatCheckboxModule, MatIconModule,
        MatInputModule, MatFormFieldModule, MatDatepickerModule,
        MatNativeDateModule, MatSidenavModule, MatToolbarModule,
        MatListModule, MatTabsModule, MatCardModule
    ],
    exports: [
        MatButtonModule, MatCheckboxModule, MatIconModule,
        MatInputModule, MatFormFieldModule, MatDatepickerModule,
        MatNativeDateModule, MatSidenavModule, MatToolbarModule,
        MatListModule, MatTabsModule, MatCardModule
    ]
})
export class MaterialModule {

}
