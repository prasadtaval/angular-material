import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private userService: UserService) { }

  addForm: FormGroup;

  ngOnInit() {
//
//    this.addForm = this.formBuilder.group({
//      id: [],
//      email: ['', Validators.required],
//      firstName: ['', Validators.required],
//      lastName: ['', Validators.required]
//    });

	    this.addForm = this.formBuilder.group({
	    	first_name: ['', Validators.required],
	    	last_name: ['', Validators.required]
	    });

  }

  onSubmit() {
    this.userService.createUser(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-user']);
      });
  }

}
