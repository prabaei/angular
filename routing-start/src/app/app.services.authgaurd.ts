import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Authenticate } from "./app.services.authenticate";


@Injectable()
export class authgaurd implements CanActivate,CanActivateChild{
    constructor (private auth:Authenticate, private router:Router){}
    canActivate( route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean
    {
  return this.auth.isAuthenticate().then((isauthenticated:boolean)=>{
      if(isauthenticated)
      return true;
      else
      {
          this.router.navigate(['/']);
          return false;
      }
  })
return true;
    }

    canActivateChild( route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean
    {
return this.canActivate(route,state);
    }
}