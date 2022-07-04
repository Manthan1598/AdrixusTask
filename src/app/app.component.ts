import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { customSetter } from './view/custome-setter/custome-setter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AdrixusTask';

  // input binding value
  username: any = '';

  // child-parent componet data passing
  parentMsg: any = 'Hi this message is sending from the parent. How  are you?';
  @Input() childMsg: string = "";


  constructor(
    public custSetter: customSetter
  ) {
    console.log("Angular application currnetly is in " + environment.value)
  }

  receiveChildData(data: any) {
    this.childMsg = data;
  }

  // custom setter-getter

  firstName: any = ''
  nameArray: any = [];

  getFirstName() {
    // first it will get the name and display in list
    this.nameArray.push(this.custSetter.firstName);

    // send the first name to setter service
    this.custSetter.firstName = this.firstName;
  }

  // ng-onchange 
  simpleTextBox: any = '';
}
