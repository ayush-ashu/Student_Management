import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule, MatSelectModule } from '@angular/material';

const MaterialComponents =[
  MatButtonModule,
  MatDialogModule,
  MatSelectModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
