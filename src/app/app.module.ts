import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleCalculatorComponent } from './components/sample-calculator/sample-calculator.component';
// Module required for using ngModel in forms
import { FormsModule } from '@angular/forms';
// Module requred in order to send Http request for Angular
import { HttpClientModule } from '@angular/common/http';

// Module and model required for routing
import { RouterModule, Routes } from '@angular/router';
import { SampleCalculatorChangeComponent } from './components/sample-calculator-change/sample-calculator.component';
import { ResultComponent } from './components/result-component/result.component';
import { ReqResService } from './services/reqres.service';
import { SampleServiceComponent } from './components/sample-service-component/sample-service.component';
import { PageOneComponent } from './pages/page-one/page.component';
import { PageTwoComponent } from './pages/page-two/page.component';
import { PageThreeComponent } from './pages/page-three/page.component';

// Routes definition
const routes: Routes = [
  { path: '', component: PageOneComponent },
  { path: 'page-two', component: PageTwoComponent },
  { path: 'page-three/:user-id', component: PageThreeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SampleCalculatorComponent,
    SampleCalculatorChangeComponent,
    SampleServiceComponent,
    ResultComponent,
    PageTwoComponent,
    PageOneComponent,
    PageThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ReqResService],
  bootstrap: [AppComponent]
})
export class AppModule { }
