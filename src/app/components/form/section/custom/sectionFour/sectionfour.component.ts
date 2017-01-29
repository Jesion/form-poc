import { Component, Input, QueryList, ViewChildren, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormSectionComponent } from '../../section.component';
import { BaseControlComponent } from '../../../../controls/baseControl/basecontrol.component';
import { IControl } from '../../../../controls/control';

@Component({
  selector: 'section-four',
  templateUrl: 'app/components/form/section/custom/sectionFour/sectionfour.component.html',
  styleUrls: ['app/components/form/section/section.component.css']
})
export class SectionFourComponent extends FormSectionComponent {

  @ViewChildren('sectionFour')
  public set sectionElements(value: QueryList<IControl>) {
    this.elements = value;
  }

  constructor( fb: FormBuilder ) {
    super( fb );
  }

  public maskedValue: string;

  public onMaskedValueChanged($event) {
    this.maskedValue = $event as string;
  }
}
