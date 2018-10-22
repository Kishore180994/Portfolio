import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeviceDetectorService } from 'ngx-device-detector';
import { trigger, transition, group, query, style, animate, animateChild } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // trigger('animRoutes', [
    //   transition('* <=> *', [
    //     group([
    //       query(
    //         ':enter',
    //         [
    //           style({
    //             opacity: 0,
    //             transform: 'translateY(9rem) rotate(-10deg)'
    //           }),
    //           animate(
    //             '0.35s cubic-bezier(0, 1.8, 1, 1.8)',
    //             style({ opacity: 1, transform: 'translateY(0) rotate(0)' })
    //           ),
    //           animateChild()
    //         ],
    //         { optional: true }
    //       ),
    //       query(
    //         ':leave',
    //         [animate('0.35s', style({ opacity: 0 })), animateChild()],
    //         { optional: true }
    //       )
    //     ])
    //   ])
    // ])

    trigger('slideInOut', [
      transition('* => *, :enter', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
        query(':enter', style({ transform: 'translateY(100vw)' }), { optional: true }),
        query(':leave', style({ transform: 'translateY(0vw)' }), { optional: true }),

        group([
          query(':leave', [
            animate('500ms ease-in-out', style({
              transform: 'translateY(-100vw)'
            }))
          ], { optional: true }),
          query(':enter', [
            animate('500ms ease-in-out', style({
              transform: 'translateY(0vw)'
            }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})

export class AppComponent {
  title = 'Kishore Blog';
  propsToShow = ['userAgent', 'os', 'browser', 'device', 'os_version', 'browser_version'];
  deviceInfo = null;
  currentURL = null;
  color = 'blue';
  constructor(private deviceService: DeviceDetectorService,
              private router:Router){
    this.deviceInfo = deviceService.getDeviceInfo();
    // console.log(this.deviceInfo)
    router.events.subscribe(event => {

      if (event instanceof NavigationEnd ) {
        // console.log("current url",event.url); // event.url has current url
        this.currentURL = event.url;
        // your code will goes here
        if(this.currentURL.match('/about')){
          this.color = '#BCA136';
        }else this.color = 'black';
      }
    });
    
  }

//   ngOnInit() {
//     let currentUrl = this.router.url; /// this will give you current url
//     console.log("Current URL: "+currentUrl);
//     // your logic to know if its my home page.
// } 
  getPage(outlet) {
    console.log("Outlet: "+ outlet.activatedRouteData['page']);
    return outlet.activatedRouteData['page'] || 'one';
  }

  triggerAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }

  get isMobile() {
    return this.deviceService.isMobile();
  }

  get isTablet() {
    return this.deviceService.isTablet();
  }

  get isDesktop() {
    return this.deviceService.isDesktop();
  }
  redirect_social(name: any){
    // console.log(name);
    if(name === 'linkedin') window.open("https://www.linkedin.com/in/chandrakishoredanduri","_blank");
    else if(name === 'github') window.open("https://github.com/Kishore180994","_blank");
    else if(name === 'twitter') window.open("https://twitter.com/chandrakishore1","_blank");
    else if(name === 'instagram') window.open("https://www.instagram.com/kishore189/","_blank");

  }
}
