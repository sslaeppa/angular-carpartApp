import {Component} from "@angular/core";

@Component({
  selector: 'about',
  template: `
    <header class="container">
      <h1 myTextDecoration="line-through">Something about races</h1>
      
      <p>Races are usually pretty awesome, schedule to race today!</p>
    </header>
    <p>MyDate Pipe 사용예) {{dateStr | mydate:'-'}}</p>
    `
})
export class AboutComponent {
  dateStr = '20170406';
}
