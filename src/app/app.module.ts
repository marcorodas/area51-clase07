import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NuevoComponent } from './usuarios/nuevo/nuevo.component';
import { EdicionComponent } from './usuarios/edicion/edicion.component';

const rutas: Route[] = [
    {path: "", component: LoginComponent},
    {path: "home", component: HomeComponent},
    {path: "usuario", component: UsuariosComponent, children: [
        {path: "nuevo", component: NuevoComponent},
        {path: "edicion", component: EdicionComponent},
    ]},
    {path: "**", component: LoginComponent}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(rutas) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, LoginComponent, UsuariosComponent, NuevoComponent, EdicionComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
