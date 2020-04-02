import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { MatFormFieldModule, MatLabel, MatFormField, MatHint } from '@angular/material/form-field';
import { MatInputModule, MatInput } from '@angular/material/input';
import { MatIconModule, MatIcon } from '@angular/material/icon';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatLabel,
    MatInputModule,
    MatInput,
    MatFormField,
    MatIconModule,
    MatHint,
    MatIcon
  ]
})
export class HeaderModule { }
