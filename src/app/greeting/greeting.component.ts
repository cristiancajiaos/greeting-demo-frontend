import { Component, OnInit } from '@angular/core';
import { Greeting } from './greeting';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {

  public greeting = new Greeting();

  constructor() { }

  ngOnInit(): void {
    this.greeting.id = 1;
    this.greeting.content = "Hello, World!";
  }

}
