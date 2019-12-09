import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { ServersService } from "../servers.service";

@Injectable()
export class serverResolver implements Resolve<{name:string,status:string,id:number}> {
    constructor(private serverser:ServersService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): { name: string; status: string; id: number; } | import("rxjs").Observable<{ name: string; status: string; id: number; }> | Promise<{ name: string; status: string; id: number; }> {
        return this.serverser.getServer(+route.params["id"]);
    }

}