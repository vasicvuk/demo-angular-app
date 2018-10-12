import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
   result: number;
   @Input() numberA = 0;
   @Input() numberB = 0;

   ngOnInit(): void {
     this.result = Number(this.numberA) + Number(this.numberB);
  }
}
