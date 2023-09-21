import { Component } from '@angular/core';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  inputValue: string = '';
  hide=true;
  currentStep = 0;
 
  nextStep() {
    if (this.currentStep < 3) { // Assuming 3 steps in total: 0, 1, 2
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  submit() {
    console.log("Form submitted with");
   
  }
  
}
