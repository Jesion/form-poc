import {Component, forwardRef, Input} from '@angular/core';
import {BaseControlComponent} from './baseControl/basecontrol.component';
import {Restrict} from './baseControl/basecontrol.mask';
import {NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'zipcode-control',
    templateUrl: 'app/components/controls/baseControl/basecontrol.component.html',
    styleUrls: ['app/components/controls/baseControl/basecontrol.component.css'],
})
export class ZipCodeControlComponent extends BaseControlComponent {

    @Input()
    public required: boolean = true;

    @Input()
    public pattern: string = '[0-9]{2}-[0-9]{3}';


    @Input()
    public mask: string = '__-___';

    constructor() {

        super();

        this.restrict = Restrict.NUMERIC;

        this.errorKeys = ['maxLen', 'required', 'pattern'];
    }
}
