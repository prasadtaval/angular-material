import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  getSingleValueObservable,
  getDelayedValueObservable,
  getMultiValueObservable
} from '../../../utils/Utils';

@Component({
  selector: 'app-combine-latest-operator',
  templateUrl: './combine-latest-operator.component.html',
  styleUrls: ['./combine-latest-operator.component.scss']
})
export class CombineLatestOperatorComponent {
	show = false;
	  values$ = combineLatest(
	    getSingleValueObservable(),
	    getDelayedValueObservable(),
	    getMultiValueObservable()
	  ).pipe(
	    map(([first, second, third]) => { 
	      return { first, second, third };
	    })
	  );
}
