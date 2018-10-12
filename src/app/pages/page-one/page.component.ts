import { Component } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page.component.html'
})
export class PageOneComponent {

   constructor() {
   }

   onChange(number) {
    console.log('Calculation value changed to: ' + number);
   }
}
