import { Component, Input, QueryList, ViewChildren, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormSectionComponent } from '../../section.component';
import { BaseControlComponent } from '../../../../controls/baseControl/basecontrol.component';

@Component({
  selector: 'section-three',
  templateUrl: 'app/components/form/section/custom/sectionThree/sectionthree.component.html',
  styleUrls: ['app/components/form/section/section.component.css']
})
export class SectionThreeComponent extends FormSectionComponent implements AfterViewInit, OnDestroy {

  @ViewChildren('sectionThree')
  public elements: QueryList<BaseControlComponent>;	

  @Input()
  public root: FormGroup;

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
