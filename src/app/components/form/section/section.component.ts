import {Component, OnInit, AfterViewInit, Input, QueryList} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {BaseControlComponent} from '../../controls/baseControl/basecontrol.component';
import {Inject} from '@angular/core';
import {FormModel} from '../form.model';

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

  public elements: QueryList<BaseControlComponent>;	

  public form: FormGroup;

  protected keys: Array<string> = [];

  constructor(private fb: FormBuilder) {

  }

  protected hookToModel(form: FormGroup, control: BaseControlComponent) {
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

  protected hookAll(elements: QueryList<BaseControlComponent>, root: FormGroup) {
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

  protected initModel() {
    if (this.model && this.model.get(this.id) != null) {
      setTimeout(() => {
        let section = this.model.get(this.id);
        this.form.patchValue(section);
      }, 0);
    }
  }

  ngOnDestroy() {
    this.unhookAll(this.root);
  }

  ngAfterViewInit() {
    this.hookAll(this.elements, this.root);
  }
}
