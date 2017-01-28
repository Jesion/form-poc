import { Component, Input, Output, QueryList, ViewChildren, AfterViewInit, OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormSectionComponent } from '../../section.component';
import { BaseControlComponent } from '../../../../controls/baseControl/basecontrol.component';

@Component({
  selector: 'section-one',
  templateUrl: 'app/components/form/section/custom/sectionOne/sectionone.component.html',
  styleUrls: ['app/components/form/section/section.component.css']
})
export class SectionOneComponent extends FormSectionComponent {

  @ViewChildren('sectionOne')
  public set sectionOneElements(value: QueryList<BaseControlComponent>) {
    this.elements = value;
  }

  public maxLen: number = 100;

  private _requiredField: boolean = false;

  @Output()
  public requiredChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  public set requiredField(value: boolean) {
    if (value !== this._requiredField) {
      this._requiredField = value;
      this.requiredChanged.emit(value);
    }
  }

  public get requiredField(): boolean {
    return this._requiredField;
  }

  constructor( fb: FormBuilder ) {
    super( fb );
  }
}
