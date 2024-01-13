import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class MembroService {
  private urlBase = environment.config.apis.movit;
}
