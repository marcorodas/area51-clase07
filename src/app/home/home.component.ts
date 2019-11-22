import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { UsuarioService } from '../usuario.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router, private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  edicion(id:number){
    console.log(id)
  }

}
