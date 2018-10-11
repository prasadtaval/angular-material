import { Component } from '@angular/core';

import {
  getSingleValueObservable,
  getDelayedValueObservable,
  getMultiValueObservable
} from '../../../utils/Utils';

@Component({
  selector: 'app-async-pipe-object',
  templateUrl: './async-pipe-object.component.html',
  styleUrls: ['./async-pipe-object.component.scss']
})
export class AsyncPipeObjectComponent {
	show = false;
	  first$ = getSingleValueObservable();
	  second$ = getDelayedValueObservable();
	  third$ = getMultiValueObservable();
}
