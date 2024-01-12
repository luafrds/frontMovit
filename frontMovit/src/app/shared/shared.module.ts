import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HeaderInicioComponent } from './components/header-inicio/header-inicio.component';

@NgModule({
  declarations: [
    HeaderInicioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    HeaderInicioComponent
  ],
})
export class SharedModule { }
