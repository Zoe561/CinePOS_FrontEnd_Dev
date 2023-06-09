import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { STATIC_ROUTES } from './core/constant/routes.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'staff';

  constructor(
    private router: Router
  ) { }

  isLoginPage = true;

  ngOnInit(): void {
    // 判斷路由是否為登入頁，若是則隱藏header跟購物車
    this.router.events.pipe(
    ).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.url === `/${STATIC_ROUTES.LOGIN}` ? true : false;
      }
    })


  }


}
