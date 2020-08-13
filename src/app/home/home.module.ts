import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { NativeScriptRouterModule } from "@nativescript/angular/router";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
    imports: [NativeScriptCommonModule, NativeScriptRouterModule, HomeRoutingModule],
    declarations: [HomeComponent],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
