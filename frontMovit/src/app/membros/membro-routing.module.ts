import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ListarMembroComponent } from "./paginas/listar-membro/listar-membro.component";

const routes: Routes = [
  {
    path: '',
    component: ListarMembroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembroRoutingModule { }
