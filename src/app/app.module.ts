import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent} from './login/register.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


//rutas
import { APP_ROUTES } from './app.routes';


//temporal
import { FormsModule }   from '@angular/forms';

//modulos
import { PagesModule } from './pages/pages.modulo';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    RegisterComponent
       
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
