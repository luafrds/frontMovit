import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { LoginRequest } from "../models/login-request";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private urlBase = environment.config.apis.movit;

  baseApiUrl = environment.config.apis.movit;;
  error!: string;


  constructor(
    private httpService: HttpClient,
    private router: Router) { }

  logarUsuario(loginRequest: LoginRequest) {
    return this.httpService.post(`${this.baseApiUrl}autenticacoes/logar`, loginRequest);
  }

  autenticado(): boolean {
    const token = localStorage['token'];
    if (token != null || token != undefined)
      return true;
    return false;
  }
}