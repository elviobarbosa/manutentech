import { Inject } from "@angular/core";
import { AuthResponse, createClient } from "@supabase/supabase-js"
import { environment } from "../environments/environment.development";
import { Observable, from } from "rxjs";

@Inject({
    provideIn: 'root'
})
export class AuthService{
    supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
    register(email: string, username:string, password: string): Observable<AuthResponse> {
        const promise = this.supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    username
                }
            }
        });
        return from(promise)
    }
}