import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '12-ShoppingList';
  featureToSHow ='recipe';

  featureSelected(feature:string){
this.featureToSHow = feature;
  }

}
