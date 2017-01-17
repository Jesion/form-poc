import {Component, Input} from '@angular/core';

@Component({
  selector: 'form-section',
  templateUrl: 'app/components/form/section/section.component.html',
  styleUrls: ['app/components/form/section/section.component.css']
})
export class FormSectionComponent {

  @Input()
  public id: string;

  @Input()
  public models: Array<string> = [];

  @Input()
  public label: string = 'My Section';
 
}
