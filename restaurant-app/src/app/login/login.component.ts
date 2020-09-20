import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert: boolean = false;
  email: string;
  password: string;
  public collection1: any;

  constructor(private resto: CommonService, private router: Router) {}

  ngOnInit(): void {}

  logIn() {
    this.resto.getUserList().subscribe(result => {
      this.collection1 = result;

      for (const [index, user] of this.collection1.entries()) {
        if (user.email == this.email && user.password == this.password) {
          this.router.navigate(['../list']);
          alert('welcome: ' + this.email);
          break;
        }
        if (index == this.collection1.length - 1) {
          alert('wrong email or password');
        }
      }
    });
  }
}
