import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AuthTabComponent } from './components/auth-tab/auth-tab.component';
import { AuthModule } from 'src/app/module/auth.module';
import { AuthRouterModule } from 'src/app/module/auth-router.module';


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AuthRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
