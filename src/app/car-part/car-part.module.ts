import {CarPartService} from "./car-part.service";
import {CommonModule} from "@angular/common";
import {CarPartComponent} from "./car-part.component";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CarPartFormComponent} from "./car-part-form.component";

@NgModule({
  imports:[CommonModule,FormsModule,ReactiveFormsModule],
  declarations:[CarPartComponent,CarPartFormComponent],
  exports:[CarPartComponent],
  providers:[CarPartService]
})
export class CarPartModule {

}
