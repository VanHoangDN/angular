import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // public name = 'Aslan';
  // public age = 25;
  public traiCay = ['Cam','Táo','Nho','Quít','Ổi'];
  public traiCay2 = [
    {ten:'Táo',giagoc:10,gia:9,haGia:false},
    {ten:'Ổi',giagoc:10,gia:5,haGia:true},
    {ten:'Nho',giagoc:12,gia:12,haGia:false}
  ];

  public districts: string[]=['Quận/Huyện'];

  public cities = [
    {city:'Chọn thành phố',district:['Quận/Huyện']},
    {city:'Đà Nẵng',
  district:['Quận Cẩm Lệ','Quận Hải Châu','Quận Liên Chiểu','Quận Ngũ Hành Sơn','Quận Sơn Trà','Quận Thanh Khê','Huyện Hòa Vang','Huyện Hoàng Sa']},
  {
    city:'Thành phố Hồ Chí Minh',
    district:['Quận 1','Quận 2','Quận 3','Quận 4','Quận 5','Quận 6','Quận 7','Quận 8','Quận 9','Quận 10','Quận 11','Quận 12','Quận Bình Tân','Quận Bình Thạnh','Quận Gò Vấp','Quận Phú Nhuận','Quận Tân Bình','Quận Tân Phú','Quận Thủ Đức','Huyện Bình Chánh','Huyện Cần Giờ','Huyện Củ Chi','Huyện Hóc Môn','Huyện Nhà Bè']
  }]
  

  constructor() { }

  ngOnInit(): void {
    console.log('trái cây = ',this.traiCay);
    console.log('city = ',this.cities);
  }

  public changeCity(event:any):void{
    const thanhpho = event.target.value;
    if(!thanhpho){
      return;
    }
    // console.log('event ', thanhpho);

    //cách 1
    // const search = this.cities.filter((data) => data.city === thanhpho);
    // // console.log('event',search);
    // if (search && search.length>0){
    //   this.districts = search[0].district;
    // }

    //cách 2
    this.districts = this.cities.find((data)=>data.city === thanhpho)?.district || [];
  }

  //from html to code
  // public resetName():void {
  //   console.log('resetName');
  //   this.name='';
  // }

}
