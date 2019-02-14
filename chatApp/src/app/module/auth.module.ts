import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthTabComponent } from 'src/app/components/auth-tab/auth-tab.component';

@NgModule({
  declarations: [AuthTabComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AuthTabComponent
  ]
})
export class AuthModule { }
