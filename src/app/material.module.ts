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
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule, MatCheckboxModule, MatIconModule,
        MatInputModule, MatFormFieldModule, MatDatepickerModule,
        MatNativeDateModule, MatSidenavModule, MatToolbarModule,
        MatListModule
    ],
    exports: [
        MatButtonModule, MatCheckboxModule, MatIconModule,
        MatInputModule, MatFormFieldModule, MatDatepickerModule,
        MatNativeDateModule, MatSidenavModule, MatToolbarModule,
        MatListModule
    ]
})
export class MaterialModule {

}
