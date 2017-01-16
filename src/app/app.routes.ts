import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
	{ path: '', redirectTo: 'myform', pathMatch: 'full' },
	{ path: 'myform', component: FormComponent }
];

export const routing = RouterModule.forRoot(routes);
