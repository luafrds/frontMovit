import { NgModule } from "@angular/core";
import { InicioComponent } from "./paginas/inicio/inicio.component";
import { LoginComponent } from "./paginas/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ToastrModule } from "ngx-toastr";
import { CoreRoutingModule } from "./core-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule
({
  declarations: [InicioComponent, LoginComponent],
  imports: [
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
    ToastrModule.forRoot()
  ],
  providers: []
})
export class CoreModule{}
