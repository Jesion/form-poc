import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DateControlComponent } from '../controls/date.component';
import { BaseControlComponent } from '../controls/baseControl/basecontrol.component';
import { NameControlComponent } from '../controls/name.component';
import { FormSectionComponent } from './section/section.component';

@Component({
	selector: 'my-form',
	templateUrl: 'app/components/form/form.component.html',
	styleUrls: ['app/components/form/form.component.css']
})
export class FormComponent implements OnInit, AfterViewInit {

	public myForm: FormGroup;

	@ViewChild('date1')
	public dateOne: DateControlComponent;

	@ViewChild('date2')
	public dateTwo: DateControlComponent;

	@ViewChild('date3')
	public dateThree: DateControlComponent;

	@ViewChildren('sectionB')
	public sectionB: QueryList<BaseControlComponent | FormSectionComponent>;

	@ViewChildren('sectionC')
	public sectionC: QueryList<BaseControlComponent | FormSectionComponent>;

	public sectionBVisible: boolean = false;

	public sectionBModels: Array<string> = [ 'date4', 'name' ];

	public sectionCVisible: boolean = false;

	public sectionCModels: Array<string> = [ 'firstName', 'lastName' ];

	constructor( private fb: FormBuilder ) {

	}

	ngOnInit() {
		let dateOneControl: FormControl = this.dateOne.baseCtrl;
		let dateTwoControl: FormControl = this.dateTwo.baseCtrl;
		let dateThreeControl: FormControl = this.dateThree.baseCtrl;
		this.myForm = this.fb.group({ 'dateOne': dateOneControl, 'dateTwo': dateTwoControl, 'dateThree': dateThreeControl });
		this.myForm.valueChanges.subscribe((value: any) => {
			console.log('form changed: ' + JSON.stringify(value));
		});
    }

	ngAfterViewInit() {
		console.log('ngAfterViewInit...');
		
		this.registerSection( this.sectionB, this.sectionBModels );

		this.registerSection( this.sectionC, this.sectionCModels );
	}

	private registerSection(section: QueryList<BaseControlComponent | FormSectionComponent>, models: Array<string>) {
		if (section) {
			section.changes.subscribe((list: QueryList<BaseControlComponent | FormSectionComponent>) => {
				let all: Array<BaseControlComponent | FormSectionComponent> = list.toArray();
				let controls: Array<BaseControlComponent> = [];
				if (all.length == 0) {
					models.forEach((model) => {
						this.unhookFromModel(model);
					})
				}
				all.forEach((component) => {
					if (component instanceof BaseControlComponent) {
						controls.push(<BaseControlComponent>component);
					}
				})
				for (let i = 0; i < controls.length; i++) {
					this.hookToModel(controls[i], models[i]);
				}
			});
		}
	}

	public onSubmit(value: any) {
		console.log('Submit handler: ' + JSON.stringify(value));
	}

	public onToggleSectionB() {
		this.sectionBVisible = !this.sectionBVisible;
	}

	public onToggleSectionC() {
		this.sectionCVisible = !this.sectionCVisible;
	}

	private hookToModel(control: BaseControlComponent, name: string) {
		console.log('hooking ' + name);
		setTimeout(() => {
			this.myForm.addControl(name, control.baseCtrl);
		}, 0);
	}

	private unhookFromModel(name: string) {
		console.log('unhooking ' + name);
		setTimeout(() => {
			this.myForm.removeControl(name);
		}, 0);		
	}
}
