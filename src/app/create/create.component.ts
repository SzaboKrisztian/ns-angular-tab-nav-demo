import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ns-new-task',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
        console.log('ngOnInit')
    }

}
