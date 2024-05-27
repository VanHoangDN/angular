import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-template-diven-form',
  templateUrl: './template-diven-form.component.html',
  styleUrls: ['./template-diven-form.component.scss']
})
export class TemplateDivenFormComponent implements OnInit {

  public name='';
  constructor(private ser:CommonService) { }

  ngOnInit(): void {
  }

  public submitForm():void{
    console.log('Submit form: name = '+this.name);
    this.ser.submitDataToServer({name:this.name,age:12});
  }

}
