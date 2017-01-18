import {Component, Input, QueryList} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {BaseControlComponent} from '../../controls/baseControl/basecontrol.component';

@Component({
  selector: 'form-section',
  templateUrl: 'app/components/form/section/section.component.html',
  styleUrls: ['app/components/form/section/section.component.css']
})
export class FormSectionComponent {

  @Input()
  public id: string;

  @Input()
  public label: string = 'My Section';

  public form: FormGroup;

  protected keys: Array<string> = [];

  protected hookToModel(form: FormGroup, control: BaseControlComponent) {
    form.addControl(control.modelKey, control.baseCtrl);
  }

  protected unhookFromModel(form: FormGroup, modelKey: string) {
    form.removeControl(modelKey);
  }

  protected createForm(fb: FormBuilder) {
    this.form = fb.group({  });
    this.form.valueChanges.subscribe((value: any) => {
      
    });
  }

  protected unhookAll(root: FormGroup) {
    this.keys.forEach((key) => {
      this.unhookFromModel(this.form, key);
    });
    setTimeout(() => {
      root.removeControl(this.id);
    }, 0)
  }

  protected hookAll(elements: QueryList<BaseControlComponent>, fb: FormBuilder, root: FormGroup) {
    elements.forEach((control) => {
      this.keys.push(control.modelKey);
      if (!this.form) {
        this.createForm(fb);
      }
      this.hookToModel(this.form, control);
    });
    setTimeout(() => {
      root.addControl(this.id, this.form);
    }, 0);
  }
}
