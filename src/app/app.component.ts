import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { ResultsComponent } from './results/results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, ResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('userInputComponent') userInputComponent!: UserInputComponent;
  
  calculationResults?: {monthlyRate: string, totalPayment: string }; 

  onCalculateResults(data: { mortgageAmount: number, mortgageTerm: number, interestRate: number, mortgageType: string }) {
    const mortgageDurationInMonths = data.mortgageTerm * 12; 
    let monthlyRate: number; 
    let totalPayment: number; 

    // calculate the monthly interest
    const monthlyInterest = (data.interestRate / 100) / 12; 

    if (data.mortgageType == 'repayment') {
      // calculate the monthly rate (annuity formula)
      monthlyRate = data.mortgageAmount * (((monthlyInterest * ((1 + monthlyInterest) ** mortgageDurationInMonths))) / (((1 + monthlyInterest) ** mortgageDurationInMonths ) - 1));

      // calculate the total payment over the mortgage term
      totalPayment = this.calculateTotalPayment(mortgageDurationInMonths, monthlyRate); 
    } else {
      // calculate the montly rate (interest only)
      monthlyRate = data.mortgageAmount * monthlyInterest; 

      // calculate the total payment over the mortgage term
      totalPayment = this.calculateTotalPayment(mortgageDurationInMonths, monthlyRate); 
    }
    // format the monthly rate and the total payment and round it to two decimal places
    this.calculationResults = { 
      monthlyRate: this.formatMoney(monthlyRate), 
      totalPayment: this.formatMoney(totalPayment)
    }
  }

  formatMoney(money: number) {
    return new Intl.NumberFormat('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(money); 
  }

  calculateTotalPayment(durationInMonths: number, monthlyRate: number) {
    return durationInMonths * monthlyRate;  
  }

  onClearAll() {
    this.userInputComponent.clearAllInputs();
  }
}
