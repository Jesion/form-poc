import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DateControlComponent } from '../controls/date.component';
import { BaseControlComponent } from '../controls/baseControl/basecontrol.component';
import { NameControlComponent } from '../controls/name.component';

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
	public dynamicControlsFuture: QueryList<BaseControlComponent>;

	public sectionBVisible: boolean = false;

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
		if (this.dynamicControlsFuture) {
			this.dynamicControlsFuture.changes.subscribe((list: QueryList<BaseControlComponent>) => {
				let myComponents: Array<BaseControlComponent> = list.toArray();
				if (myComponents.length == 0) {
					this.unhookFromModel('date4');
					this.unhookFromModel('name');
				} else {
					myComponents.forEach((component) => {
						let name: string;
						if (component instanceof DateControlComponent) {
							name = 'date4';			
						} else if (component instanceof NameControlComponent) {
							name = 'name';
						}
						this.hookToModel(component, name);
					})
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

	private hookToModel(control: BaseControlComponent, name: string) {
		setTimeout(() => {
			this.myForm.addControl(name, control.baseCtrl);
		}, 0);
	}

	private unhookFromModel(name: string) {
		setTimeout(() => {
			this.myForm.removeControl(name);
		}, 0);		
	}
}
