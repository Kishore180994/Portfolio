import { Component, OnInit, NgModule } from '@angular/core';
import { ContentService } from '../shared/services/content.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AccrodionComponent } from '../shared/accrodion/accrodion.component';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})

@NgModule({
  imports:[AccrodionComponent]
})
export class PageComponent implements OnInit {

  page: Object;
  isOpened = true;
  // page = {
  //   title: 'Home',
  //   subtitle: 'welcome Home!',
  //   content: 'Some home content',
  //   image: 'assets/bg.jpg'
  // };
  constructor(private route: ActivatedRoute,
          private router: Router,
          private contentService: ContentService) { }

  ngOnInit() {
    console.log('contact: ngOnInit');
    // //this.page = this.contentService.pages['home'];
    // const pageData = this.route.snapshot.data['page'];
    // this.page = this.contentService.pages[pageData];
  }

  scrollToElement(){
    // this.router.navigate(['contact'],{relativeTo: this.route});
    this.router.navigate(['home']);
    //window.open('home','_self');
  }

}
