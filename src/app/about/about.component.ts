import { Component, OnInit ,Inject} from '@angular/core';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';
import {  expand } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    expand()
  ]
})
export class AboutComponent implements OnInit {
  leaders: Leader[];
  errMess: string;

  constructor(private leaderservice: LeaderService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
     this.leaderservice.getLeaders().subscribe(leader => this.leaders = leader,
      errmess => this.errMess = <any>errmess);
  }

}
