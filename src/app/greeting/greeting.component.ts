import { Component, Input, OnInit } from '@angular/core';
import { Greeting } from './greeting';
import { GreetingService } from './greeting.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {

  public greeting = new Greeting();
  @Input() name: string = '';

  constructor(
    private greetingService: GreetingService
  ) { }

  ngOnInit(): void {
    if (this.name) {
      this.getGreetingForUser()
    } else {
      this.getGreeting();
    }
  }

  private getGreetingForUser(): void {
    this.greetingService.getGreetingForUser(this.name).subscribe(greeting => {
      this.greeting = greeting;
    });
  }

  private getGreeting(): void {
    this.greetingService.getGreeting().subscribe(greeting => {
      this.greeting = greeting;
    });
  }


}
