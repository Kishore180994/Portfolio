import { Component, OnInit, NgZone, NgModule, HostListener } from '@angular/core';
import { ActivatedRoute, Router, ɵROUTER_PROVIDERS} from '@angular/router';
import { ContentService } from '../shared/services/content.service';
import { Links } from './links';
import { slideInOutAnimation } from '../slideInOutAnimation';
import { BOUNCE_IN, BOUNCE_OUT } from 'angular-bounce';

import { AppRoutingModule } from '../app-routing.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { verticalTransitions } from '../verticalTransitions';
import { trigger, transition, style, query, stagger, animate, state, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [verticalTransitions],
  host: { '[@verticalTransitions]': '' }
})

@NgModule({
  imports:[BrowserAnimationsModule,
            MatTooltipModule]
})
export class HomeComponent implements OnInit {

  home: Object;
  console = console;
  element: HTMLElement;
  e:any;
  currentState = 'inactive';
  constructor(private route: ActivatedRoute,
        private router: Router) { }


  ngOnInit() {
    // const homeData = this.route.snapshot.data['home'];
    // this.home = this.contentService.homes[homeData];
    this.currentState = this.currentState === 'inactive' ? 'active' : 'inactive';
    console.log(this.currentState);
  }

  changeState() {
    
    console.log(this.currentState);
  }

  onMouseMove(e) {
    this.e = e;
  }

  setBgStyle(){
    try{
    var moveX=((this.e.x)*-1/5);
    var moveY=((this.e.y)*-1/5);
    }catch(error){}
    // console.log(moveX);
    let styles = {
      // 'background-image': 'url(../../assets/images/sw.jpg)',
      'background-position':moveX+'px '+moveY+'px'
    };
    return styles;
  }

  @HostListener('mousewheel', ['$event']) onMousewheel(event) {
    if(event.wheelDelta>0){
      this.router.navigate(['about']);
    }
    if(event.wheelDelta<0){
      // event.srcElement.style.setProperty('transition','all 200ms ease-out');
      // this.router.navigate(['home']);
    }
  }

  scrollToElement(){
    // this.router.navigate(['contact'],{relativeTo: this.route});
    this.router.navigate(['about']);
    this.currentState = 'inactive';
    //window.open('home','_self');
  }
  
  redirect_social(name: any){
    // console.log(name);
    if(name === 'linkedin') window.open("https://www.linkedin.com/in/chandrakishoredanduri","_blank");
    else if(name === 'github') window.open("https://github.com/Kishore180994","_blank");
    else if(name === 'twitter') window.open("https://twitter.com/chandrakishore1","_blank");
    else if(name === 'instagram') window.open("https://www.instagram.com/kishore189/","_blank");

  }
}
