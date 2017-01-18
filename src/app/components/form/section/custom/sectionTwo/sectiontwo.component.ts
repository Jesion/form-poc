import { Component, Input, QueryList, ViewChildren, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormSectionComponent } from '../../section.component';
import { BaseControlComponent } from '../../../../controls/baseControl/basecontrol.component';
import { FormModel } from '../../../form.model';
import {BehaviorSubject, Observable} from 'rxjs';

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

  private _model: FormModel;

  private data: Observable<boolean>;

  @Input()
  public set model(value: FormModel) {
    this._model = value;
    console.log('model ' + value);
    this.data = Observable.of( value.dateRequired );
    this.data.subscribe(value => this.onValueChange(value))
  }

  private onValueChange(value: boolean) {
    console.log('value change: ' + value);
  }

  public get model(): FormModel {
    return this._model;
  }

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
/*
    new BehaviorSubject<boolean>( model.dateRequired ).subscribe( (value) => {
      console.log('new value ' + value);
    });
    */
  }

  ngOnDestroy() {
    this.unhookAll(this.root);
  }

  ngAfterViewInit() {
    this.hookAll(this.elements, this.fb, this.root);
  }
}
