import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";

@Injectable()
export class RaceService {
  constructor(private http:HttpClient){
    console.log(this.http);
  }
  getRaces():Observable<any>{
    //return this.http.get('http://127.0.0.1:52274/products', {responseType:'json'});
    return this.http.get('assets/json/races.json', {responseType:'json'});
  }
}
