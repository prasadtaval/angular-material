import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { SnackBarService } from '../../services/snack-bar.service';
import { TitleService } from '../../services/titleservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multiple-observables',
  templateUrl: './multiple-observables.component.html',
  styleUrls: ['./multiple-observables.component.scss']
})
export class MultipleObservablesComponent implements OnInit {

	constructor() { }
	ngOnInit() { }
}
