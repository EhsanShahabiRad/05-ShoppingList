import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  collapsed = true;
  // @Output() featureSelected = new EventEmitter<string>;

  //   onSelected(feature:string){
  //     this.featureSelected.emit(feature);
  //   }
}
