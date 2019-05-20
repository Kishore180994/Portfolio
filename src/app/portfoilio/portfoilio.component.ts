import { Component, OnInit, HostListener } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { cardTemplate } from './cardTemplate'

@Component({
  selector: 'app-portfoilio',
  templateUrl: './portfoilio.component.html',
  styleUrls: ['./portfoilio.component.sass']
})
export class PortfoilioComponent implements OnInit {
  numOfProjects = 10;

  constructor(private _router: Router) { }

  ngOnInit() {

  }



  details(Id: number) {
    console.log(Id);
    this._router.navigate(['/portfolio', Id]);
  }

  // @HostListener('mousewheel', ['$event']) onMousewheel(event) {
  //   if(event.wheelDelta>180){
  //     this._router.navigate(['contact']);
  //   }
  //   if(event.wheelDelta<180){
  //     event.srcElement.style.setProperty('transition','all 200ms ease-out');
  //     this._router.navigate(['resume']);
  //   }
  // }

}
