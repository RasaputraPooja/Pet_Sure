import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  testClick() {
    alert('Button clicked!');
  }
  onButtonClick() {
    console.log('Button clicked in Angular!');
}


}
