import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthService {

	public userIsLogged: boolean = false;
	public cookieValue: string;

	constructor(private cookieService: CookieService) { 
		this.cookieValue = this.cookieService.get('userIsLogged');
		//alert(this.cookieValue);
		if(this.cookieValue == 'true'){
			this.userIsLogged = true;
		}
	}

	public login(email: string, password: string): Promise<any> {
		this.userIsLogged = true;
		this.cookieService.set('userIsLogged', 'true');
		return Promise.resolve(true);
	}

	public logout(): Promise<any> {
		this.userIsLogged = false;
		this.cookieService.delete('userIsLogged');
		this.cookieService.deleteAll();
		return Promise.resolve(true);
	}

	public isLogged(): boolean {
		//console.log('isLogged?');
		//console.log(this.userIsLogged);
		return this.userIsLogged;
	}
}
