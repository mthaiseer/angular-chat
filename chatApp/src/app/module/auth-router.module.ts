import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthTabComponent } from 'src/app/components/auth-tab/auth-tab.component';

const routes: Routes = [
  {
    path: '',
    component: AuthTabComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRouterModule { }
