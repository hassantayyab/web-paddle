import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { MatFormFieldModule, MatLabel, MatFormField, MatHint } from '@angular/material/form-field';
import { MatInputModule, MatInput } from '@angular/material/input';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatRippleModule
  ]
})
export class HeaderModule { }
