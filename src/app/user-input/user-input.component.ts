import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<{ mortgageAmount: number, mortgageTerm: number, interestRate: number, mortgageType: string}>(); 
  @ViewChild('form') form!: NgForm;

  enteredMortgageAmount = '';
  enteredMortgageTerm = ''; 
  enteredInterestRate = ''; 
  enteredMortgageType = ''; 

  onSubmit(form: any) {
    if (form.invalid) {
      return;
    }

    this.calculate.emit({
      mortgageAmount: +this.enteredMortgageAmount, 
      mortgageTerm: +this.enteredMortgageTerm, 
      interestRate: +this.enteredInterestRate, 
      mortgageType: this.enteredMortgageType
    }); 
    form.resetForm();
  }
  
  clearAllInputs() {   
    this.form.resetForm(); 
  }
}
