import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HeaderInicioComponent } from './components/header-inicio/header-inicio.component';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptorService } from "./interceptors/http.interceptor";
import { ToastrModule } from "ngx-toastr";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    HeaderInicioComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule
  ],
  exports: [
    HeaderInicioComponent
  ],
})
export class SharedModule { }
