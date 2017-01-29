import { Component, Input, QueryList, ViewChildren, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormSectionComponent } from '../../section.component';
import { BaseControlComponent } from '../../../../controls/baseControl/basecontrol.component';
import { IControl } from '../../../../controls/control';

@Component({
  selector: 'section-two',
  templateUrl: 'app/components/form/section/custom/sectionTwo/sectiontwo.component.html',
  styleUrls: ['app/components/form/section/section.component.css']
})
export class SectionTwoComponent extends FormSectionComponent {

  @ViewChildren('sectionTwo')
  public set sectionElements(value: QueryList<IControl>) {
    this.elements = value;
  }

  private _dateRequired: boolean = false;

  @Input()
  public set dateRequired(value: boolean) {
    if (this._dateRequired !== value) {
      this._dateRequired = value;
    }
  }

  public get dateRequired(): boolean {
    return this._dateRequired;
  }

  public maxLen: number = 100;

  private _requiredField: boolean = false;

  public set requiredField(value: boolean) {
    this._requiredField = value;
  }

  public get requiredField(): boolean {
    return this._requiredField;
  }

  constructor( fb: FormBuilder ) {
    super( fb );
  }
}
