import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ns-browse-tasks',
    templateUrl: './browse.component.html',
    styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
        console.log('ngOnInit')
    }

}
