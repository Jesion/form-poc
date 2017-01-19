import { Component, Input, Output, QueryList, ViewChildren, AfterViewInit, OnDestroy, EventEmitter } from '@angular/core';
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

  public form: FormGroup;

  public maxLen: number = 100;

  private _sectionTwoOpen: boolean = false;

  @Output()
  public sectionTwoOpenChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  public set sectionTwoOpen(value: boolean) {
    if (value === this._sectionTwoOpen) {
      this._sectionTwoOpen = value;
    }
  }

  public get sectionTwoOpen(): boolean {
    return this._sectionTwoOpen;
  }

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

  constructor( private fb: FormBuilder ) {
    super();
  }

  ngOnDestroy() {
    this.unhookAll(this.root);
  }

  ngAfterViewInit() {
    this.hookAll(this.elements, this.fb, this.root );
  }
}
