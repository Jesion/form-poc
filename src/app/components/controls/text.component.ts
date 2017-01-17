import {Component, Input} from '@angular/core';
import {BaseControlComponent} from './baseControl/basecontrol.component';

@Component({
  selector: 'text-control',
  templateUrl: 'app/components/controls/baseControl/basecontrol.component.html',
  styleUrls: ['app/components/controls/baseControl/basecontrol.component.css']
})
export class TextControlComponent extends BaseControlComponent {

  constructor() {

    super();
    
    this.errorKeys = ['required'];
  }
}
