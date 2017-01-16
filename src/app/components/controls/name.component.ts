import {Component, Input} from '@angular/core';
import {BaseControlComponent} from './baseControl/basecontrol.component';
import {Character} from '../../statics/character';

@Component({
  selector: 'name-control',
  templateUrl: 'app/components/controls/baseControl/basecontrol.component.html',
  styleUrls: ['app/components/controls/baseControl/basecontrol.component.css']
})
export class NameControlComponent extends BaseControlComponent {

  @Input()
  public required: boolean = true;

  @Input()
  public pattern: string = '[a-zA-Z' + Character.polishDiactricts + ' /-]*';

  @Input()
  public maxLen: number = 32;

  constructor() {

    super();
    
    this.errorKeys = ['pattern', 'maxLen', 'required'];
  }
}
