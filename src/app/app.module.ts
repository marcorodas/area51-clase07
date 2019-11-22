import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NuevoComponent } from './usuarios/nuevo/nuevo.component';
import { EdicionComponent } from './usuarios/edicion/edicion.component';

import { ReactiveFormsModule } from "@angular/forms";
import { UsuarioService } from './usuario.service'

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
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(rutas) ],
  declarations: [ AppComponent, HomeComponent, LoginComponent, UsuariosComponent, NuevoComponent, EdicionComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UsuarioService]
})
export class AppModule { }
