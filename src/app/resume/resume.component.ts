import { Component, OnInit, HostListener } from '@angular/core';
import { verticalTransitions } from '../verticalTransitions';
import { ParticlesModule } from 'angular-particle';
import { Router } from '@angular/router';
declare var particlesJS: any;
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  animations:[verticalTransitions],
  host: { '[@verticalTransitions]': '' }
})
export class ResumeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  @HostListener('mousewheel', ['$event']) onMousewheel(event) {
    if(event.wheelDelta>0){
      this.router.navigate(['portfolio']);
    }
    if(event.wheelDelta<0){
      event.srcElement.style.setProperty('transition','all 200ms ease-out');
      this.router.navigate(['about']);
    }
  }
}
