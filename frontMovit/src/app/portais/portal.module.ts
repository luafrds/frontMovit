import { NgModule } from "@angular/core";
import { InicioPortalComponent } from "./paginas/inicio-portal/inicio-portal.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "app/shared/shared.module";
import { PortalRoutingModule } from "./portal-routing.module";

@NgModule({
    declarations: [
      InicioPortalComponent
    ],
    imports: [
      CommonModule,
      PortalRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      SharedModule,
    ],
  })
  export class PortalModule {}