import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "@nativescript/angular/router";

import { HomeComponent } from "./home.component";

const routes: Routes = [
    {
        path: "", component: HomeComponent, children: [
            {
                path: "create",
                outlet: "newTaskTab",
                component: NSEmptyOutletComponent,
                loadChildren: () => import("../create/create.module").then(m => m.CreateModule)
            },
            {
                path: "browse",
                outlet: "browseTasksTab",
                component: NSEmptyOutletComponent,
                loadChildren: () => import("../browse/browse.module").then(m => m.BrowseModule)
            },
            {
                path: "accounts",
                outlet: "accountsTab",
                component: NSEmptyOutletComponent,
                loadChildren: () => import("../account/account.module").then(m => m.AccountModule)
            }
        ]
    }
]

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule {
}
