import { RouterModule, Routes } from "@angular/router";
import { ListarCantinaComponent } from "./paginas/listar-cantina/listar-cantina.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: ListarCantinaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CantinaRoutingModule { }

