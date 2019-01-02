import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.forthFormGroup = this._formBuilder.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrlUID: ['', Validators.required],
      fifthCtrlPWD: ['', Validators.required]
    });
  }

  productionEnv: any = [
    {value: 't01', viewValue: 'T01'},
    {value: 't02', viewValue: 'T02'},
    {value: 't03', viewValue: 'T03'}
  ];

  onSubmit(): void{
    alert("Submited");
  }


}
