import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // public name = 'Aslan';
  // public age = 25;
  public traiCay = ["Cam","Táo","Nho","Quít","Ổi"];
  public traiCay2 = [
    {ten:"Táo",giagoc:10,gia:9,haGia:false},
    {ten:"Ổi",giagoc:10,gia:5,haGia:true},
    {ten:"Nho",giagoc:12,gia:12,haGia:false}
  ];

  constructor() { }

  ngOnInit(): void {
    console.log('trái cây = ',this.traiCay);
  }

  //from html to code
  // public resetName():void {
  //   console.log("resetName");
  //   this.name='';
  // }

}
