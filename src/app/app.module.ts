import { 
    NgModule 
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HostComponent } from './components/host/host.component';
import { FormComponent } from './components/form/form.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routes';
import { DateControlComponent } from './components/controls/date.component';
import { DateControlWrapperComponent } from './components/controls/date.wrapper.component';
import { NameControlComponent } from './components/controls/name.component';
import { ControlErrorComponent } from './components/controls/error/error.component';

@NgModule({
    declarations: [ 
        AppComponent,
        HostComponent,
        FormComponent,
        DateControlComponent,
        DateControlWrapperComponent,
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
        
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {
    
}
