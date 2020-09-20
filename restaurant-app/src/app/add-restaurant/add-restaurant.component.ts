import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  alert: boolean = false;
  restaurants = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    email: new FormControl('')
  });
  constructor(private resto: CommonService) {}

  ngOnInit(): void {}
  createRestaurant() {
    return this.resto
      .addRestaurant(this.restaurants.value)
      .subscribe(result => {
        this.alert = true;
        this.restaurants.reset({});
        console.log('Get Data From Service', result);
      });
  }
  closeAlert() {
    this.alert = false;
  }
}
