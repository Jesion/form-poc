import {Component, Input} from '@angular/core';
import {BaseControlComponent} from './baseControl/basecontrol.component';

@Component({
  selector: 'text-input-control',
  templateUrl: 'app/components/controls/baseControl/basecontrol.component.html',
  styleUrls: ['app/components/controls/baseControl/basecontrol.component.css']
})
export class TextControlComponent extends BaseControlComponent {

  @Input()
  public required: boolean = false;

  @Input()
  public maxLen: number = 10000;

  constructor() {

    super();
    
    this.errorKeys = ['maxLen', 'required'];
  }
}
