import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-onchange',
  templateUrl: './ng-onchange.component.html',
  styleUrls: ['./ng-onchange.component.scss']
})
export class NgOnchangeComponent implements OnInit {

  constructor() { }

  @Input()  simpleText : string = '';
  
  ngOnInit(): void {
  }

}
