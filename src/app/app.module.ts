import { 
    NgModule 
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { FormSectionComponent } from './components/form/section/section.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routes';
import { DateControlComponent } from './components/controls/date.component';
import { NameControlComponent } from './components/controls/name.component';
import { ControlErrorComponent } from './components/controls/error/error.component';
import { FormModel } from './components/form/form.model';

@NgModule({
    declarations: [ 
        AppComponent,
        FormComponent,
        FormSectionComponent,
        DateControlComponent,
        NameControlComponent,
        ControlErrorComponent
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
