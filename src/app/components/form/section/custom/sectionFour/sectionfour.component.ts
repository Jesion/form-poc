import { Component, Input, QueryList, ViewChildren, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormSectionComponent } from '../../section.component';
import { BaseControlComponent } from '../../../../controls/baseControl/basecontrol.component';

@Component({
  selector: 'section-four',
  templateUrl: 'app/components/form/section/custom/sectionFour/sectionfour.component.html',
  styleUrls: ['app/components/form/section/section.component.css']
})
export class SectionFourComponent extends FormSectionComponent implements AfterViewInit, OnDestroy {

  @ViewChildren('sectionFour')
  public elements: QueryList<BaseControlComponent>;	

  @Input()
  public root: FormGroup;

  constructor( private fb: FormBuilder ) {
    super();
  }

  ngOnDestroy() {
    this.unhookAll(this.root);
  }

  ngAfterViewInit() {
    this.hookAll(this.elements, this.fb, this.root);
  }
}
