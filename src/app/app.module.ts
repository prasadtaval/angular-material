import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LoginComponent } from './pages/login/login.component';
import { MatSelectModule, MatDatepickerModule, MatNativeDateModule , MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule, MatProgressSpinnerModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatStepperModule, MatAutocompleteModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SnackBarService } from './services/snack-bar.service';
import { TitleService } from './services/titleservice';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user.service';

import { AuthGuardService } from './services/auth/auth-guard.service';


import { EmpListComponent } from './pages/emp-list/emp-list.component';
import { EmpCountComponent } from './pages/emp-count/emp-count.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import {ListUserComponent} from "./pages/list-user/list-user.component";

import { MultipleObservablesComponent } from "./pages/multiple-observables/multiple-observables.component";
import { AsyncPipeComponent } from "./pages/multiple-observables/async-pipe/async-pipe.component";
import { AsyncPipeObjectComponent } from "./pages/multiple-observables/async-pipe-object/async-pipe-object.component";
import { CombineLatestOperatorComponent } from "./pages/multiple-observables/combine-latest-operator/combine-latest-operator.component";
import { ForkJoinOperatorComponent } from "./pages/multiple-observables/fork-join-operator/fork-join-operator.component";
import { ManualSubscriptionsComponent } from "./pages/multiple-observables/manual-subscriptions/manual-subscriptions.component";


import {DirectiveSampleComponent} from "./pages/directive-sample/directive-sample.component";
import { ShadowDirective } from './directive/shadow.directive';
import { CDDefaultThemeDirective }  from './directive/attribute-directives/cd-default-theme.directive';
import { CDColorDirective }  from './directive/attribute-directives/cd-color.directive';
import { CDCustomThemeDirective }  from './directive/attribute-directives/cd-custom-theme.directive';
import { DefaultColorOnEventDirective }  from './directive/attribute-directives/default-color-on-event.directive';
import { DynamicColorOnEventDirective }  from './directive/attribute-directives/dynamic-color-on-event.directive';
import { CDIfDirective }  from './directive/structural-directives/cd-if.directive';
import { CDDelayDirective }  from './directive/structural-directives/cd-delay.directive';
import { CDLoopDecorator }  from './directive/structural-directives/cd-loop.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MainNavComponent,
    LoginComponent,
    EmpListComponent,
    EmpCountComponent,
    CDDefaultThemeDirective,
	CDColorDirective,
	CDCustomThemeDirective,
	DefaultColorOnEventDirective,
	DynamicColorOnEventDirective,
	CDIfDirective,
	CDDelayDirective,
	CDLoopDecorator,
	ShadowDirective,
	AddUserComponent,
	EditUserComponent,
	ListUserComponent,
	DirectiveSampleComponent,
	MultipleObservablesComponent,
	AsyncPipeComponent,
	AsyncPipeObjectComponent,
	CombineLatestOperatorComponent,
	ForkJoinOperatorComponent,
	ManualSubscriptionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatStepperModule, MatAutocompleteModule,
    MatSelectModule ,MatDatepickerModule, MatNativeDateModule 
  ],
  providers: [
    SnackBarService,
    TitleService,
    UserService,
    AuthService,
    AuthGuardService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
