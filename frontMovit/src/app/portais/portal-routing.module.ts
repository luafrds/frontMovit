import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InicioPortalComponent } from "./paginas/inicio-portal/inicio-portal.component";

const routes: Routes = [
    {
      path: '',
      component: InicioPortalComponent,
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class PortalRoutingModule {}