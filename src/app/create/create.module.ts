import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular/router";
import { NativeScriptCommonModule } from "@nativescript/angular/common";

import { CreateComponent } from "./create.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "create" },
            { path: "create", component: CreateComponent }
        ])
    ],
    declarations: [CreateComponent],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class CreateModule {
}
