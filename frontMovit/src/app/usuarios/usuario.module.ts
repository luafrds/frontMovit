import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { ListarUsuarioComponent } from "./paginas/listar-usuario/listar-usuario.component";
import { UsuarioRoutingModule } from "./usuario-routing.module";

@NgModule({
  declarations: [
    ListarUsuarioComponent,
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
  ]
})
export class UsuarioModule { }
