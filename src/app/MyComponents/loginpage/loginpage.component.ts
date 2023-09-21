import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  hide = true;
  policyNumber!: string;
  microChipNumber!: string;
  password!: string;
  password1!: string;
  isPolicyNumberVisible = true;
  isPetMicrochipVisible = false;
  btnLeftPosition = '0px';  // Initial position

  showPolicyNumber() {
    this.isPolicyNumberVisible = true;
    this.isPetMicrochipVisible = false;
    this.btnLeftPosition = '0px';
  }

  showPetMicroChip() {
    this.isPolicyNumberVisible = false;
    this.isPetMicrochipVisible = true;
    this.btnLeftPosition = '170px';  // Adjust this based on your CSS and button sizes.
  }

  loginform=new FormGroup
  ({
    policy_Number:new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$")]),
    pass_word:new FormControl('', [Validators.required]),
    
  })
  loginform2=new FormGroup
  ({
    microchip_id:new FormControl('', [Validators.required,Validators.pattern("^[a-zA-Z0-9!@#$%^&*_+\-=\]*$")] ),
    pass_word2:new FormControl('', [Validators.required]),
  })

}
