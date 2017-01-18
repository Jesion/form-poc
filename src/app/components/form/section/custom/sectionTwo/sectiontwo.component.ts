import { Component, Input, QueryList, ViewChildren, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormSectionComponent } from '../../section.component';
import { BaseControlComponent } from '../../../../controls/baseControl/basecontrol.component';

@Component({
  selector: 'section-one',
  templateUrl: 'app/components/form/section/custom/sectionOne/sectionone.component.html',
  styleUrls: ['app/components/form/section/section.component.css']
})
export class SectionTwoComponent extends FormSectionComponent implements AfterViewInit, OnDestroy {

  @ViewChildren('sectionTwo')
  public elements: QueryList<BaseControlComponent>;	

  @Input()
  public root: FormGroup;

  public maxLen: number = 100;

  private _requiredField: boolean = false;

  public set requiredField(value: boolean) {
    this._requiredField = value;
    console.log('Field required: ' + value);
  }

  public get requiredField(): boolean {
    return this._requiredField;
  }

  constructor( private fb: FormBuilder ) {
    super();
  }

  ngOnDestroy() {
    console.log('destroy...');
    this.keys.forEach((key) => {
      this.unhookFromModel(this.form, key);
    });
    setTimeout(() => {
      this.root.removeControl(this.id);
    }, 0)
  }

  ngAfterViewInit() {
    this.elements.forEach((control) => {
      this.keys.push(control.modelKey);
      if (!this.form) {
          this.createForm(this.fb);
      }
      this.hookToModel(this.form, control);
    });	
    setTimeout(() => {
      this.root.addControl(this.id, this.form);
    }, 0);
  }
}
