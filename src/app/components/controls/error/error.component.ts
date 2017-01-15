import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'control-error',
  templateUrl: 'app/components/controls/error/error.component.html',
  styleUrls: ['app/components/controls/error/error.component.css']
})
export class ControlErrorComponent {

  @Input()
  public baseCtrl: FormControl;

  @Input()
  public errorKeys: Array<string>;

  public hasError(): boolean {
    let error: boolean = false;
    if (this.errorKeys && this.baseCtrl) {
      this.errorKeys.forEach((key) => {
          if (this.baseCtrl.hasError(key) === true) {
            error = true;
          }
      })
    }
    return error;
  } 

  public getErrors(): Array<string> {
    let errors: Array<string> = [];
    this.errorKeys.forEach((key) => {
      if (this.baseCtrl.hasError(key)) {
        errors.push(key);
      }
    });
    return errors;
  }
}
