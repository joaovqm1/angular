import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import {map, filter} from 'rxjs/operators';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private state$: Observable<any>;

  constructor(private router: Router) { }

  ngOnInit() {
    this.state$ = this.router.events.pipe(
      filter(e => e instanceof NavigationStart),
      map(() => this.router.getCurrentNavigation().extras.state)
    );
    console.log(this.state$);
  }

}
