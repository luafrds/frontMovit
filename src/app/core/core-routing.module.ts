import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./paginas/login/login.component";
import { NgModule } from "@angular/core";
import { InicioComponent } from "./paginas/inicio/inicio.component";

declare const KTApp: any;

const rotas: Routes = [
	{
		path: "",
    pathMatch: "full",
		redirectTo: "inicio"
	},
	{
		path: 'inicio',
		component: InicioComponent,
	},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule],
})
export class CoreRoutingModule {
  constructor() {}
}
