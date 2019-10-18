import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'adif-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'adif';
  toggle = false;
  showMenu = false;
  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    // this.router.events.subscribe((evt) => {
    //   if (!(evt instanceof NavigationEnd)) {
    //       return;
    //   }
    //   window.scrollTo(0, 0);
    // });
  }

  show() {
    this.showMenu = !this.showMenu;
  }
  @HostListener('body:click', ['$event'])
  onclick(event) {
    const ele: HTMLElement = <HTMLElement> event.target;
    const eleClass = ele.parentElement.parentElement;
    if (eleClass && !eleClass.classList.contains('matMenu')) {
      this.toggle = false;
    }
  }
}
