import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { authgaurd } from "./app.services.authgaurd";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { NgModule } from "@angular/core";
import { canDeactivateAuthGuard } from "./servers/edit-server/server.candeactivate";
import { serverResolver } from "./servers/server/server.resolver";

const appRoutes:Routes=[
    {path:"",component:HomeComponent}
    ,{path:"users",component:UsersComponent,children:[
      {path:":name/:id",component:UsersComponent}
    ]}
    ,{path:"servers",component:ServersComponent,canActivateChild:[authgaurd], children:[
      {path:":id",component:ServerComponent,resolve:{server:serverResolver}}
    ,{path:":id/edit",component:EditServerComponent,canDeactivate:[canDeactivateAuthGuard]}
    ]},
    {path:"not-found",component:NotFoundComponent},
    {path:"**",redirectTo:"/not-found"}
  ];

  @NgModule({
      imports:[
          RouterModule.forRoot(appRoutes)
      ]
      ,
      exports:[RouterModule]
  })
export class routeModule {
   
}