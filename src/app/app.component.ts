
import { Component,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scrollableSections';

  activeSection = 1;

  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) { }

  scrollTo(event: HTMLElement, index: number) {
    this.pageScrollService.scroll({
      scrollTarget: event,
      document: this.document
    });

    this.activeSection = index;
  }

}
