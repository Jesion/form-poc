import {Injectable} from '@angular/core';

@Injectable()
export class FormModel {

    public model: Object = {};

    constructor() {
       
    }

    load() {
        this.model = {
            'sectionOne': {
                'textFieldKey': 'text field',
                'textFieldKeyOnlyDigits': '0123456789',
                'textFieldKeyWithVariableMaxLen': '202221919',
                'zipCode': '20-010'
            },
            'sectionTwo': {
                'sectionTwoDateOne': '2010-01-01'
            },
            'sectionThree': {
                'sectionThreeDateOne': '2020-11-01',
                'sectionThreeDateTwo': '2000-01-01',
                'sectionThreeDateThree': '1999-01-01'
            },
            'sectionFour': {
                'sectionFourTextOne': 'text',
                'sectionFourTextTwo': 'coding',
                'sectionFourTextThree': 'is',
                'sectionFourTextFour': 'fun',
                'sectionFourTextFive': 'coding',
                'sectionFourTextSix': 'all',
                'sectionFourTextSeven': 'people',
                'sectionFourTextEight': 'should',
                'sectionFourTextNine': 'code',
                'sectionFourTextTen': 'every',
                'sectionFourTextEleven': 'day',
                'sectionFourTextTwelve': 'day'
            }
        }
    }    

    get(key: string): Object {
        return this.model[key];
    }	
}
