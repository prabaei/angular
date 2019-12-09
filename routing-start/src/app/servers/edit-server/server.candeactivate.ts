import { Observable } from "rxjs/observable";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export interface canDeactivateComponent{
    canDeactivate:()=>Observable<boolean>|Promise<boolean>|boolean;
}

export class canDeactivateAuthGuard implements CanDeactivate<canDeactivateComponent>{
    canDeactivate(component:canDeactivateComponent,
        curroute:ActivatedRouteSnapshot,
        curState:RouterStateSnapshot,nextstate?:RouterStateSnapshot
        ):Observable<boolean>|Promise<boolean>|boolean
    {
return component.canDeactivate();
    }
}