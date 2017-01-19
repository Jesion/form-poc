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

	constructor( private fb: FormBuilder ) {
		this.createForm();
		this.dateRequired = false;
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

    public onRequiredChanged($event) {
		this.dateRequired = $event as boolean;
	}

	public onSectionTwoOpenChanged($event) {
		this.sectionTwoVisible = $event as boolean;
	}

	public currentModel: string;

	private createForm() {
		this.myForm = this.fb.group({  });
		this.myForm.valueChanges.subscribe((value: any) => {
			this.currentModel = JSON.stringify(value);
		});
	}
}
