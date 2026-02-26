import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<{ mortgageAmount: number, mortgageTerm: number, interestRate: number, mortgageType: string}>(); 

  enteredMortgageAmount = '0';
  enteredMortgageTerm = '0'; 
  enteredInterestRate = '0'; 
  enteredMortgageType = ''; 

  onSubmit() {
    this.calculate.emit({
      mortgageAmount: +this.enteredMortgageAmount, 
      mortgageTerm: +this.enteredMortgageTerm, 
      interestRate: +this.enteredInterestRate, 
      mortgageType: this.enteredMortgageType
    }); 

    this.enteredMortgageAmount = '0';
    this.enteredMortgageTerm = '0'; 
    this.enteredInterestRate = '0'; 
    this.enteredMortgageType = '';
  }
}
