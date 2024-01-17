import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
  })
  export class LoginService {
    private urlBase = environment.config.apis.movit;
  
    constructor(private http: HttpClient) {}
  }