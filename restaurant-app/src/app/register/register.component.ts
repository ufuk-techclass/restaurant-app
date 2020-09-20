import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert: boolean = false;
  createUser = new FormGroup({
    title: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('')
  });
  constructor(private resto: CommonService) {}

  ngOnInit(): void {}

  regUser() {
    this.resto.createUser(this.createUser.value).subscribe(result => {
      this.alert = true;
      this.createUser.reset({});
      console.log('Data created', result);
    });
  }
  closeAlert() {
    this.alert = false;
  }
}
