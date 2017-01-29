import {Component, OnInit, AfterViewInit, Input, QueryList} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {BaseControlComponent} from '../../controls/baseControl/basecontrol.component';
import {Inject} from '@angular/core';
import {FormModel} from '../form.model';
import {IControl} from '../../controls/control';

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

  @Input()
  public model: FormModel;

  @Input()
  public root: FormGroup;

  public elements: QueryList<IControl>;	

  public form: FormGroup;

  protected keys: Array<string> = [];

  constructor(private fb: FormBuilder) {

  }

  protected hookToModel(form: FormGroup, control: IControl) {
    form.addControl(control.modelKey, control.baseCtrl);
  }

  protected unhookFromModel(form: FormGroup, modelKey: string) {
    form.removeControl(modelKey);
  }

  protected createForm(fb: FormBuilder) {
    this.form = fb.group({  });
  }

  protected unhookAll(root: FormGroup) {
    this.keys.forEach((key) => {
      this.unhookFromModel(this.form, key);
    });
    root.removeControl(this.id);
  }

  protected hookAll(elements: QueryList<IControl>, root: FormGroup) {
    elements.forEach((control) => {
      this.keys.push(control.modelKey);
      if (!this.form) {
        this.createForm(this.fb);
      }
      this.hookToModel(this.form, control);
    });
    root.addControl(this.id, this.form);
    this.initModel();
  }

  public section: Object = {};

  protected initModel() {
    if (this.model && this.model.get(this.id) != null) {
      this.section = this.model.get(this.id);
    }
  }

  ngOnDestroy() {
    this.unhookAll(this.root);
  }

  ngAfterViewInit() {
    this.hookAll(this.elements, this.root);
  }
}
