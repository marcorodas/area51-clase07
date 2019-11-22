import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UsuarioService } from '../../usuario.service'

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent {

  frmNuevo: FormGroup

  constructor(private usuarioService: UsuarioService){
    this.frmNuevo = new FormGroup({
      nombre: new FormControl(null, Validators.required),
			apellido: new FormControl(null, Validators.required)
    })
  }

  onSubmit(){
    this.usuarioService.userList.push(this.frmNuevo.value)
  }
}
