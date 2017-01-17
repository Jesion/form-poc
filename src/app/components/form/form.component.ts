import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit, AfterViewChecked } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DateControlComponent } from '../controls/date.component';
import { BaseControlComponent } from '../controls/baseControl/basecontrol.component';
import { NameControlComponent } from '../controls/name.component';
import { FormSectionComponent } from './section/section.component';
import { FormModel } from './form.model';
import { Section } from './section/section';

@Component({
	selector: 'my-form',
	templateUrl: 'app/components/form/form.component.html',
	styleUrls: ['app/components/form/form.component.css']
})
export class FormComponent implements OnInit, AfterViewInit {

	public myForm: FormGroup;

	@ViewChildren('sectionA')
	public sectionA: QueryList<BaseControlComponent | FormSectionComponent>;	

	@ViewChildren('sectionB')
	public sectionB: QueryList<BaseControlComponent | FormSectionComponent>;

	@ViewChildren('sectionC')
	public sectionC: QueryList<BaseControlComponent | FormSectionComponent>;

	@ViewChildren('sectionOne')
	public sectionOne: QueryList<BaseControlComponent | FormSectionComponent>;

	public sectionAVisible: boolean = false;
	public sectionBVisible: boolean = false;
	public sectionCVisible: boolean = false;
	public sectionOneVisible: boolean = false;

	constructor( private fb: FormBuilder, private model: FormModel ) {
		this.myForm = fb.group({ });
	}

	ngOnInit() {
		setTimeout(() => {
			this.sectionAVisible = true;
			this.sectionOneVisible = true;
		}, 0);
	}

	ngAfterViewInit() {
		console.log('ngAfterViewInit...');
		this.registerSection( this.sectionA, 'sectionA' );		
		this.registerSection( this.sectionB, 'sectionB' );
		this.registerSection( this.sectionC, 'sectionC' );
		this.registerSection( this.sectionOne, 'sectionOne' );
	}

	/**
	 * Manages section controls presence in reactive forms model
	 * Generic for all form sections
	 */
	private registerSection(section: QueryList<BaseControlComponent | FormSectionComponent>, id: string) {
		if (section) {
			section.changes.subscribe((list: QueryList<BaseControlComponent | FormSectionComponent>) => {
				let all: Array<BaseControlComponent | FormSectionComponent> = list.toArray();
				let controls: Array<BaseControlComponent> = [];
				let s: Section;
				if (all.length == 0) {
					//unregistering controls
					if (this.model.hasSection(id) == true) {
						s = this.model.getSection(id);
						s.controls.forEach((control) => {
							this.unhookFromModel(control.modelKey);
						});
					}
				} else {			
					//registering controls
					all.forEach((component) => {
						if (component instanceof BaseControlComponent) {
							controls.push(<BaseControlComponent>component);
						} else if (component instanceof FormSectionComponent) {
							s = new Section(component.id);
							this.model.addSection(s);
						}
					})
					s.controls = controls;
					for (let i = 0; i < s.controls.length; i++) {
						this.hookToModel(s.controls[i]);
					}
				}
			});
		}
	}

	public onSubmit(value: any) {
		console.log('Submit handler: ' + JSON.stringify(value));
	}

	public onToggleSectionA() {
		this.sectionAVisible = !this.sectionAVisible;
	}

	public onToggleSectionB() {
		this.sectionBVisible = !this.sectionBVisible;
	}

	public onToggleSectionC() {
		this.sectionCVisible = !this.sectionCVisible;
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
