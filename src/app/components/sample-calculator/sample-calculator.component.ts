import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './sample-calculator.component.html',
  styleUrls: ['./sample-calculator.component.css']
})
export class SampleCalculatorComponent {
   numberA = 0;
   numberB = 0;
   result: number;

   calculate(): void {
     this.result = Number(this.numberA) + Number(this.numberB);
   }
}
