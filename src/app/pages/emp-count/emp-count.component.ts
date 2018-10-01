import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emp-count',
  templateUrl: './emp-count.component.html',
  styleUrls: ['./emp-count.component.css']
})
export class EmpCountComponent{

	  constructor() { }

	selectedRadioButton: string = 'All';

	@Output()
	countSelectedChange: EventEmitter<string> = new EventEmitter<string>();
	
	@Input()
	all: number;
	
	@Input()
	male: number;
	
	@Input()
	female: number;
	

  
  OnSelectionChange(){
	  this.countSelectedChange.emit(this.selectedRadioButton);
  }

}
