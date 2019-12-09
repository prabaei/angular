import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output()
  OnFeatureSelected = new EventEmitter<string>();
constructor(){};
OnFeatureClick(feature:string){
this.OnFeatureSelected.emit(feature);
}
}
