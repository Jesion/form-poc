import { Component, Input, QueryList, ViewChildren, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormSectionComponent } from '../../section.component';
import { BaseControlComponent } from '../../../../controls/baseControl/basecontrol.component';

@Component({
  selector: 'section-two',
  templateUrl: 'app/components/form/section/custom/sectionTwo/sectiontwo.component.html',
  styleUrls: ['app/components/form/section/section.component.css']
})
export class SectionTwoComponent extends FormSectionComponent implements AfterViewInit, OnDestroy {

  @ViewChildren('sectionTwo')
  public elements: QueryList<BaseControlComponent>;	

  @Input()
  public root: FormGroup;

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

  ngOnDestroy() {
    this.unhookAll(this.root);
  }

  ngAfterViewInit() {
    this.hookAll(this.elements, this.root);
  }
}
