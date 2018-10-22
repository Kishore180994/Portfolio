import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ContentService } from '../shared/services/content.service';import { DOCUMENT, CommonModule } from '@angular/common';
import { slideInOutAnimation } from '../slideInOutAnimation';
import { MatSidenavModule, MatListModule, MatIconModule, MatNativeDateModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ViewEncapsulation } from '@angular/core';
import { verticalTransitions } from '../verticalTransitions';

@NgModule({
  imports:[CommonModule, MatButtonModule,MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule],
  exports:[CommonModule, MatButtonModule,MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule]
})
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  // animations: [verticalTransitions],
  // host: { '[@verticalTransitions]': '' },
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {

  about:Object;
  fin:any;
  aheight: any;
  showA:boolean;
  showB:boolean;

  constructor(private route: ActivatedRoute,
        private router: Router,
        private contentService: ContentService,
        private http: Http) { }

  
  ngOnInit() {
    this.showA = true;
    this.showB = false;
    // const aboutData = this.route.snapshot.data['about'];
    // this.about = this.contentService.abouts[aboutData];
    this.http.get('../../assets/info.txt').subscribe(data => {
      // console.log(data.text());
      this.fin = data.text().toString();
    })
  } 
  mouseEnter(div){
    console.log("mouse enter : " + div);
    this.showB = true;
    this.showA = false;
 }

 mouseLeave(div){
  console.log('mouse leave :' + div);
  this.showB = false;
  this.showA = true;
}
}
