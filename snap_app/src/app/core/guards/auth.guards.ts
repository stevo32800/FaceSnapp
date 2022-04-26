import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
providedIn: 'root'
})
export class AuthGard implements CanActivate{

    constructor(private Auth: AuthService,
                private router: Router) {}

    
    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        if(this.Auth.getToken()){
            return true;        
        } else {
            this.router.navigateByUrl('/auth/login');
            return false;
        }

    }
}