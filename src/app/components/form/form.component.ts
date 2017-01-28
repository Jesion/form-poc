import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
	selector: 'my-form',
	templateUrl: 'app/components/form/form.component.html',
	styleUrls: ['app/components/form/form.component.css']
})
export class FormComponent implements OnInit {

	public myForm: FormGroup;

	public sectionOneVisible: boolean = false;
	public sectionTwoVisible: boolean = false;
	public sectionThreeVisible: boolean = false;
	public sectionFourVisible: boolean = false;

	public dateRequired: boolean;

	public newValue: string;

	constructor( private fb: FormBuilder ) {
		this.createForm();
		this.dateRequired = false;
	}

	ngOnInit() {
		this.sectionOneVisible = true;
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

	public onToggleSectionThree() {
		this.sectionThreeVisible = !this.sectionThreeVisible;
	}

	public onToggleSectionFour() {
		this.sectionFourVisible = !this.sectionFourVisible;
	}

	public onHideAll() {
		this.sectionOneVisible = false;
		this.sectionTwoVisible = false;
		this.sectionThreeVisible = false;
		this.sectionFourVisible = false;
	}

	public onShowAll() {
		this.sectionOneVisible = true;
		this.sectionTwoVisible = true;
		this.sectionThreeVisible = true;
		this.sectionFourVisible = true;
	}

	public onReset() {
		this.myForm.reset();
	}

	public onPatchValue() {
		let obj = {
			'sectionOne': {
				'textFieldKey': 'text field updated',
				'textFieldKeyOnlyDigits': '9876543210',
				'textFieldKeyWithVariableMaxLen': 'some text',
				'zipCode': '61-251'
			}
		}
		this.myForm.patchValue(obj);
	}

    public onRequiredChanged($event) {
		this.dateRequired = $event as boolean;
	}

	private createForm() {
		this.myForm = this.fb.group({  });
	}
}
