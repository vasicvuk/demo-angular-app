import { Component, OnInit } from '@angular/core';
import { ReqResService } from '../../services/reqres.service';
import { User } from '../../model/users';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-three',
  templateUrl: './page.component.html'
})
export class PageThreeComponent implements OnInit {
   userId: string;
   user: User;

   constructor(private service: ReqResService, private activatedRoute: ActivatedRoute) {
   }

   ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.userId = params['user-id'];
      this.service.getUser(this.userId).subscribe((userData) => {
        this.user = userData.data;
      });
    });
   }
}
