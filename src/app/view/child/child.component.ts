import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  // this will receive message from the parent component
  @Input() getMsgFromParent: string = "";

  // this will send the message to the parent component
  @Output() msgToParent: EventEmitter<string> = new EventEmitter();
  sendMsgToParent: any = "Hello!! this message is coming from the child component. Hope You doing well too."

  ngOnInit(): void {
    setTimeout(() => {
      this.sendDataToParent()
    }, 500)
  }

  sendDataToParent() {
    this.msgToParent.emit(this.sendMsgToParent)
  }
}
