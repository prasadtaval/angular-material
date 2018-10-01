import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-sample',
  templateUrl: './directive-sample.component.html',
  styleUrls: ['./directive-sample.component.scss']
})
export class DirectiveSampleComponent implements OnInit {

	txtsize = '25px';
	  colors = ['CYAN', 'GREEN', 'RED'];
	  myColor = '';
	  titleColor='green'
		  isShow = false;
	  showCDIf = false;
	  showCDDelay = false;
	  delayInSec = 0;
	  
	  changeCondition(flag) {
	     this.showCDIf = flag;
	  }
	  
	  constructor() {
		  this.isShow = true;
	  }
	  
	  ngOnInit() {
	  }
}
