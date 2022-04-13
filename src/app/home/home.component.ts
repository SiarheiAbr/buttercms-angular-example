import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { butterService } from '../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor(protected route: ActivatedRoute) { }

  public page: any;

  ngOnInit() {
    butterService.page.retrieve('*', 'homepage') // a page 'homepage' should have been created in butter admin: https://buttercms.com
      .then((res) => {
        this.page = res.data.data;
        console.table(this.page);
      }).catch((res) => {
        console.log(res);
    });
  }
}