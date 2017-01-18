import { Component, OnInit, QueryList } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BaseControlComponent } from '../controls/baseControl/basecontrol.component';
import { FormSectionComponent } from './section/section.component';
import { FormModel } from './form.model';
import { Section } from './section/section';

@Component({
	selector: 'my-form',
	templateUrl: 'app/components/form/form.component.html',
	styleUrls: ['app/components/form/form.component.css']
})
export class FormComponent implements OnInit {

	public myForm: FormGroup;

	public sectionOneVisible: boolean = false;
	public sectionTwoVisible: boolean = false;

	constructor( private fb: FormBuilder, private model: FormModel ) {
		this.myForm = fb.group({ });
	}

	ngOnInit() {
		setTimeout(() => {
			this.sectionOneVisible = true;
		}, 0);
	}

	public onSubmit(value: any) {
		console.log('Submit handler: ' + JSON.stringify(value));
	}

	public onToggleSectionOne() {
        this.sectionOneVisible = !this.sectionOneVisible;
    }

    public onToggleSectionTwo() {
        this.sectionTwoVisible = !this.sectionTwoVisible;
    }

	private hookToModel(control: BaseControlComponent) {
		console.log('hooking ' + control.modelKey);
		setTimeout(() => {
			if (Object.keys(this.myForm.controls).length == 0) {
				this.createForm();
			}
			this.myForm.addControl(control.modelKey, control.baseCtrl);
		}, 0);
	}

	private unhookFromModel(modelKey: string) {
		console.log('unhooking ' + modelKey);
		setTimeout(() => {
			this.myForm.removeControl(modelKey);
		}, 0);		
	}

	private createForm() {
		this.myForm = this.fb.group({  });
		this.myForm.valueChanges.subscribe((value: any) => {
			console.log('form changed: ' + JSON.stringify(value));
		});
	}
}
