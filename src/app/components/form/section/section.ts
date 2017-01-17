import { BaseControlComponent } from '../../controls/baseControl/basecontrol.component';

export class Section {
    
    constructor(public id: string, public controls?: Array<BaseControlComponent>) {

    }
}