export class UsuarioService {
  private userList:Array<{}> = [];

  listar(){
    return this.userList
  }

  //{nombre, apellido, id}
  insertar(usuario: {}){
    this.userList.push(usuario)
  }

  editar(id: number){
    return this.userList.filter((item: any) => item.id = id)[0]
  }
}