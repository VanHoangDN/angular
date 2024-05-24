import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Aslan';
  public age = 25;

  constructor() { }

  ngOnInit(): void {
  }

  //from html to code
  public resetName():void {
    console.log("resetName");
    this.name='';
  }

}
