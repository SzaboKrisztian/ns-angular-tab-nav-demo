import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular/router";
import { NativeScriptCommonModule } from "@nativescript/angular/common";
import { AccountComponent } from "./account.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "account" },
            { path: "account", component: AccountComponent }
        ])
    ],
    declarations: [ AccountComponent ],
    providers: [ ],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class AccountModule { }
