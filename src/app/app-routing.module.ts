import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { LoginComponent } from './pages/login/login.component';
import { EmpListComponent } from './pages/emp-list/emp-list.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import {ListUserComponent} from "./pages/list-user/list-user.component";
import {DirectiveSampleComponent} from "./pages/directive-sample/directive-sample.component";
import { MultipleObservablesComponent } from "./pages/multiple-observables/multiple-observables.component";

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'home',
		component: HomeComponent,
		canActivate: [AuthGuardService],
	},
	{
		path: 'emp',
		component: EmpListComponent,
		canActivate: [AuthGuardService],
	},
	{
		path: 'list-user',
		component: ListUserComponent,
		canActivate: [AuthGuardService],
	},
	{
		path: 'add-user',
		component: AddUserComponent,
		canActivate: [AuthGuardService],
	},
	{
		path: 'edit-user',
		component: EditUserComponent,
		canActivate: [AuthGuardService],
	},
	{
		path: 'directive',
		component: DirectiveSampleComponent 
	},
	{
		path: 'multipleobservables',
		component: MultipleObservablesComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes
		)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
