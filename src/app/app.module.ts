import { 
    NgModule 
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { FormSectionComponent } from './components/form/section/section.component';
import { SectionOneComponent } from './components/form/section/custom/sectionOne/sectionone.component';
import { SectionTwoComponent } from './components/form/section/custom/sectionTwo/sectiontwo.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routes';
import { DateControlComponent } from './components/controls/date.component';
import { NameControlComponent } from './components/controls/name.component';
import { TextControlComponent } from './components/controls/text.component';
import { ControlErrorComponent } from './components/controls/error/error.component';
import { FormModel } from './components/form/form.model';
import {ZipCodeControlComponent} from './components/controls/zipcode.component';

@NgModule({
    declarations: [ 
        AppComponent,
        FormComponent,
        FormSectionComponent,
        DateControlComponent,
        ZipCodeControlComponent,
        NameControlComponent,
        TextControlComponent,
        ControlErrorComponent,
        SectionOneComponent,
        SectionTwoComponent
    ],
    imports: [ 
        routing,
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule         
    ],   
    providers: [
        FormModel
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {
    
}
