import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {
  alert: boolean = false;
  editRestaurants = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    email: new FormControl('')
  });
  constructor(private resto: CommonService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.resto
      .getCurrentData(this.router.snapshot.params.id)
      .subscribe(result => {
        this.editRestaurants = new FormGroup({
          title: new FormControl(result['title']),
          author: new FormControl(result['author']),
          email: new FormControl(result['email'])
        });
      });
  }

  updateRestaurant() {
    this.resto
      .updateRestaurant(
        this.router.snapshot.params.id,
        this.editRestaurants.value
      )
      .subscribe(result => {
        this.alert = true;
        this.editRestaurants.reset({});
        console.log('data updated', result);
      });
  }

  closeAlert() {
    this.alert = false;
  }
}
