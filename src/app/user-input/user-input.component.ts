import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredMortgageAmount = '0';
  enteredMortgageTerm = '0'; 
  enteredInterestRate = '0'; 
  enteredMortgageType = ''; 

  onSubmit() {
    console.log(this.enteredMortgageAmount);
    console.log(this.enteredMortgageTerm);
    console.log(this.enteredInterestRate);
    console.log(this.enteredMortgageType);

    this.enteredMortgageAmount = '';
    this.enteredMortgageTerm = ''; 
    this.enteredInterestRate = ''; 
    this.enteredMortgageType = '';
  }
}
