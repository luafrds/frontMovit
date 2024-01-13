import { NgModule } from "@angular/core";
import { ListarCantinaComponent } from "./paginas/listar-cantina/listar-cantina.component";
import { CommonModule } from "@angular/common";
import { CantinaRoutingModule } from "./cantina-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    ListarCantinaComponent,
  ],
  imports: [
    CommonModule,
    CantinaRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
  ]
})
export class CantinaModule { }
