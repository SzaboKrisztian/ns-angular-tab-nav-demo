import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "home-page",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent {
    constructor(
        private routerExtension: RouterExtensions,
        private activeRoute: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.routerExtension.navigate(
            [{ outlets: { newTaskTab: ["create"], browseTasksTab: ["browse"], accountsTab: ["account"] } }],
            { relativeTo: this.activeRoute }
        )
            .then(r => console.log("Navigation success: ", r))
            .catch(err => console.log("Navigation error: ", err));
    }
}
