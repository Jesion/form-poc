import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormModel } from './form.model';

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

	constructor( private fb: FormBuilder, public model: FormModel ) {
		this.createForm();
		this.dateRequired = false;
	}

	ngOnInit() {
	
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

	public onLoadData() {
		this.model.load();
		this.onShowAll();
	}

    public onRequiredChanged($event) {
		this.dateRequired = $event as boolean;
	}

	private createForm() {
		this.myForm = this.fb.group({  });
	}
}
