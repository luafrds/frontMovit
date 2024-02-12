import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LOGIN_FORM } from 'app/core/formularios/login-form';
import { LoginService } from 'app/core/services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private loginService: LoginService,
    private readonly toastr: ToastrService) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(LOGIN_FORM);
  }

  logarUsuario() {
    this.loginService.logarUsuario(this.loginForm.value)
      .subscribe({
        next: response => {
          let token = Object.values(response)[0];
          localStorage['token'] = token;
          this.router.navigate(['portal']);
        },
        error: (error) => {
          if (error.status === 500) {
            this.toastr.error("E-mail ou senha inválidos.")
          }
        }
      })
  }
}
