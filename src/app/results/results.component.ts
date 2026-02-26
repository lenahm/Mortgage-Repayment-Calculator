import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  @Input() results?: { monthlyRate: string, totalPayment: string }; 
}
