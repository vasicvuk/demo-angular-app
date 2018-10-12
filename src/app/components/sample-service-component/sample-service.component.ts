import { Component, OnInit } from '@angular/core';
import { ReqResService } from '../../services/reqres.service';
import { PagedUserList } from '../../model/users';

@Component({
  selector: 'app-sample-service',
  templateUrl: './sample-service.component.html'
})
export class SampleServiceComponent implements OnInit {

   constructor(private service: ReqResService) {
   }

   result: PagedUserList;
   ngOnInit() {
     this.service.getUsers(1).subscribe((x) => {
        this.result = x;
     });
   }
}
