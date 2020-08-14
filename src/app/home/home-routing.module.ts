import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "@nativescript/angular/router";

import { HomeComponent } from "./home.component";

const routes: Routes = [
    {path: "", redirectTo: "tabs"},
    {
        path: "tabs", component: HomeComponent, children: [
            {
                path: "create",
                outlet: "newTaskTab",
                component: NSEmptyOutletComponent,
                loadChildren: () => import("~/app/create/create.module").then(m => m.CreateModule)
            },
            {
                path: "browse",
                outlet: "browseTasksTab",
                component: NSEmptyOutletComponent,
                loadChildren: () => import("~/app/browse/browse.module").then(m => m.BrowseModule)
            },
            {
                path: "account",
                outlet: "accountTab",
                component: NSEmptyOutletComponent,
                loadChildren: () => import("~/app/account/account.module").then(m => m.AccountModule)
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
