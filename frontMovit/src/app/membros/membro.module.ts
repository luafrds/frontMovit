import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { ListarMembroComponent } from "./paginas/listar-membro/listar-membro.component";
import { MembroRoutingModule } from "./membro-routing.module";

@NgModule({
  declarations: [
    ListarMembroComponent,
  ],
  imports: [
    CommonModule,
    MembroRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
  ]
})
export class MembroModule { }
