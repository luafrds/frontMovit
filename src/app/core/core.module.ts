import { NgModule } from "@angular/core";
import { LoginComponent } from "./paginas/login/login.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { CoreRoutingModule } from "./core-routing.module";
import { SharedModule } from "../shared/shared.module";
import { InicioComponent } from './paginas/inicio/inicio.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [LoginComponent, InicioComponent],
  imports: [
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    CommonModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
})
export class CoreModule {}
