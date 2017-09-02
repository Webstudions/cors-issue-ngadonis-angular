import { Component } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public products:string[] = [];
    
  constructor(
    public http: Http
  ) {
    this.http.get('http://localhost:3333/products')
      .map(response => response.json())
      .subscribe(data => this.products = data);

  }

}
