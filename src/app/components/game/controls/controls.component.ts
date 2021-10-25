import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {
  
  selectedValue = 'easy';

  constructor() { }

  onClick() {
    console.log('click');
    console.log(this.selectedValue);

  }
}
