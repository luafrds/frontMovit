import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ListarUsuarioComponent } from "./paginas/listar-usuario/listar-usuario.component";

const routes: Routes = [
  {
    path: '',
    component: ListarUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
