import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RacesComponent} from "./races.component";
import {RaceService} from "./races.service";
import {NgModule} from "@angular/core";

@NgModule({
  imports:[CommonModule, FormsModule],
  declarations:[RacesComponent],
  exports:[RacesComponent],
  providers:[RaceService]
})
export class RacesModule {

}
