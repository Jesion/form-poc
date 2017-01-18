import { Component, Input, QueryList, ViewChildren, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormSectionComponent } from '../../section.component';
import { BaseControlComponent } from '../../../../controls/baseControl/basecontrol.component';

@Component({
  selector: 'section-one',
  templateUrl: 'app/components/form/section/custom/sectionOne/sectionone.component.html',
  styleUrls: ['app/components/form/section/section.component.css']
})
export class SectionOneComponent extends FormSectionComponent implements AfterViewInit, OnDestroy {

  @ViewChildren('sectionOne')
  public elements: QueryList<BaseControlComponent>;	

  @Input()
  public root: FormGroup;

  private _keys: Array<string> = [];

  public form: FormGroup;

  public maxLen: number = 6;

  constructor( private fb: FormBuilder ) {
    super();
  }

  ngOnDestroy() {
    console.log('destroy...');
    this._keys.forEach((key) => {
      this.unhookFromModel(this.form, key);
    });
    setTimeout(() => {
      this.root.removeControl(this.id);
    }, 0)
  }

  ngAfterViewInit() {
    this.elements.forEach((control) => {
      this._keys.push(control.modelKey);
      if (!this.form) {
          this.createForm();
      }
      this.hookToModel(this.form, control);
    });	
    setTimeout(() => {
      this.root.addControl(this.id, this.form);
    }, 0);
  } 

  private createForm() {
    this.form = this.fb.group({  });
	this.form.valueChanges.subscribe((value: any) => {
		console.log('form x changed: ' + JSON.stringify(value));
	});
  }

  private hookToModel(form: FormGroup, control: BaseControlComponent) {
		form.addControl(control.modelKey, control.baseCtrl);
  }

  private unhookFromModel(form: FormGroup, modelKey: string) {
		form.removeControl(modelKey);
  }
}
