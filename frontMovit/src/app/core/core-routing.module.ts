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
		path: "login",
		component: LoginComponent,
	},
	{
		path: 'login',
		children: [
			{
				path: 'usuarios',
				loadChildren: () => import('../usuarios/usuario.module').then(x => x.UsuarioModule)
			},
			{
				path: 'membros',
				loadChildren: () => import('../membros/membro.module').then(x => x.MembroModule)
			},
			{
				path: 'cantinas',
				loadChildren: () => import('../cantinas/cantina.module').then(x => x.CantinaModule)
			},
		],
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
