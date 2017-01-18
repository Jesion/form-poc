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

  public maxLen: number = 100;

  private _requiredField: boolean = false;

  public dateRequired: boolean = false;

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
    //this.unhookAll(this.root);
  }

  ngAfterViewInit() {
    //this.hookAll(this.elements, this.fb, this.root);
  }
}
