﻿import {Component, OnInit} from "@angular/core";

@Component({
    selector: "test_app",
    templateUrl: "Angular/TestApp"
})

export class AppComponent implements OnInit {

    private message: string;

    ngOnInit() {
        this.message = "Dev change";
    }
}