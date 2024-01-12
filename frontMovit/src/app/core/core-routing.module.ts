import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./paginas/inicio/inicio.component";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./paginas/login/login.component";

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
	{
		path: 'login',
		component: LoginComponent,
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
