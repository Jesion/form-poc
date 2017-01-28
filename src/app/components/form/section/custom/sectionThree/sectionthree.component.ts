import { Component, Input, QueryList, ViewChildren, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormSectionComponent } from '../../section.component';
import { BaseControlComponent } from '../../../../controls/baseControl/basecontrol.component';

@Component({
  selector: 'section-three',
  templateUrl: 'app/components/form/section/custom/sectionThree/sectionthree.component.html',
  styleUrls: ['app/components/form/section/section.component.css']
})
export class SectionThreeComponent extends FormSectionComponent {

  @ViewChildren('sectionThree')
  public set sectionElements(value: QueryList<BaseControlComponent>) {
    this.elements = value;
  }

  constructor( fb: FormBuilder ) {
    super( fb );
  }
}
