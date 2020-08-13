import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular/router";
import { NativeScriptCommonModule } from "@nativescript/angular/common";
import { BrowseComponent } from "./browse.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "browse" },
            { path: "browse", component: BrowseComponent }
        ])
    ],
    declarations: [BrowseComponent],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class BrowseModule {
}
