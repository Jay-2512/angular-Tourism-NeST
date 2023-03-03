import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { district } from 'src/assets/data';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(public router: Router) {

  }
  districts:any
  ngOnInit() {
    this.districts = district
  }

  localStorageSet = (id:any) => {
    localStorage.setItem("title", id)
    console.log("Local Storage Set!")
  }

}
