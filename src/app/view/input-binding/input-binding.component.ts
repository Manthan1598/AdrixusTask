import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.scss']
})
export class InputBindingComponent implements OnInit {

  @Input() name : string = "";
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
