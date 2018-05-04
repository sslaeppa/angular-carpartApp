import { Component } from '@angular/core';
import {current} from "codelyzer/util/syntaxKind";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
    console.log("AppComponent constructor called");
  }

  ngOnInit(){
    console.log("AppComponent ngOnInit() called");
  }

  ngOnDestroy(){
    console.log("AppComponent ngOnDestroy() called");
  }
}
