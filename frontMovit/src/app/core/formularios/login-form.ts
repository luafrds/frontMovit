import { Validators } from "@angular/forms";

export const LOGIN_FORM = {
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required]]
}