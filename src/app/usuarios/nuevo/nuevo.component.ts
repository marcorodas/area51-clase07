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
      id: new FormControl(Date.now()),
      nombre: new FormControl(null, Validators.required),
			apellido: new FormControl(null, Validators.required)
    })
  }

  onSubmit(){
    this.usuarioService.insertar(this.frmNuevo.value)
    this.frmNuevo.reset()
  }
}
