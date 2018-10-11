import { Component } from '@angular/core';

import {
  getSingleValueObservable,
  getDelayedValueObservable,
  getMultiValueObservable
} from '../../../utils/Utils';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss']
})
export class AsyncPipeComponent {
  show = false;
  first$ = getSingleValueObservable();
  second$ = getDelayedValueObservable();
  third$ = getMultiValueObservable();
}
