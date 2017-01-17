import { Component, Input, QueryList, ViewChildren, AfterViewInit, OnDestroy } from '@angular/core';
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

  private _keys: Array<string> = [];

  public form: FormGroup;

  constructor( private fb: FormBuilder ) {
    super();

    //this.form = fb.group({});
  }

  ngOnDestroy() {
    console.log('destroy...');
    this._keys.forEach((key) => {
      this.unhookFromModel(this.form, key);
    });
    //this.root.removeControl(this.id);
  }

  ngAfterViewInit() {
    this.elements.forEach((control) => {
      this._keys.push(control.modelKey);
      if (Object.keys(this.form.controls).length == 0) {
				this.createForm();
			}
      this.hookToModel(this.form, control);
    });	
    setTimeout(() => {
      //this.root.addControl(this.id, this.form);
    }, 0);
  } 

	private createForm() {
		this.form = this.fb.group({  });
		this.form.valueChanges.subscribe((value: any) => {
			console.log('form x changed: ' + JSON.stringify(value));
		});
	}

  private hookToModel(form: FormGroup, control: BaseControlComponent) {
		console.log('hooking ' + control.modelKey);
		form.addControl(control.modelKey, control.baseCtrl);
	}

  private unhookFromModel(form: FormGroup, modelKey: string) {
		console.log('unhooking ' + modelKey);
		form.removeControl(modelKey);
	}
}
