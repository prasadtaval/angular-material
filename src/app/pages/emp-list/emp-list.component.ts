import { Component, OnInit } from '@angular/core';
import { IEmp } from '../../model/emp';
import { EmpService } from '../../services/emp.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css'],
  providers:[EmpService]
})
export class EmpListComponent implements OnInit {

	employeeList: IEmp[];
	statusMsg:string = "Loading Data....";
	selectedEmpCountRadioButton: string = 'All';
	
	constructor(private _empService: EmpService) { 
	}
	ngOnInit() {
		this.employeeList = this._empService.getEmp();
	}
	onEmpCountChanged(selectedRadioButtonValue: string):void{
    this.selectedEmpCountRadioButton = selectedRadioButtonValue;
	  }
	  getTotalEmpCount(): number {
	    return this.employeeList.length;
	  }
	  getTotalMaleEmpCount(): number {
	    return this.employeeList.filter(e => e.gender === "Male").length;
	  }
	  getTotalFemaleEmpCount(): number {
	    return this.employeeList.filter(e => e.gender === "Female").length;
	  }
	  trackByEmpCode (index:number, employee:any): string{
	    return employee.code;
	  }
}
