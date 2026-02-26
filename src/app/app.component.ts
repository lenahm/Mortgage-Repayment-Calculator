import { Component } from '@angular/core';

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
  onCalculateResults(data: { mortgageAmount: number, mortgageTerm: number, interestRate: number, mortgageType: string }) {
    console.log('From AppComponent: ', data.mortgageAmount);
    console.log('From AppComponent: ', data.mortgageTerm);
    console.log('From AppComponent: ', data.interestRate);
    console.log('From AppComponent: ', data.mortgageType);
  }
}
