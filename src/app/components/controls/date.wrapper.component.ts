import {Component, Input} from '@angular/core';
import {BaseControlWrapperComponent} from './baseControl/basecontrol.wrapper.component';
import {Restrict} from './baseControl/basecontrol.mask';
import {DateValidators} from './validators/date';

@Component({
  selector: 'date-control-wrapper',
  templateUrl: 'app/components/controls/baseControl/basecontrol.wrapper.component.html',
  styleUrls: ['app/components/controls/baseControl/basecontrol.wrapper.component.css']
})
export class DateControlWrapperComponent extends BaseControlWrapperComponent {

  @Input()
  public pattern: string = '[0-9]{4}-[0-9]{2}-[0-9]{2}';

  @Input()
  public mask: string = '____-__-__';

  constructor() {

    super();

    this._restrict = Restrict.NUMERIC;
  }

  @Input()
  public allowFutureDate: boolean = true;

  protected getValidators():Array<any> {
    let validators: Array<any> = super.getValidators();
    if (this.allowFutureDate === false) {
      validators.push( DateValidators.notInFuture() );
    }
    return validators;
  }
}
