import * as THREE from "three";

import { Component, ViewChild, ElementRef } from "@angular/core";
import { DeviceDetectorService } from "ngx-device-detector";
import {
  trigger,
  transition,
  group,
  query,
  style,
  animate,
  animateChild
} from "@angular/animations";
import { AngularFirestore } from "angularfire2/firestore";
import { Router, NavigationEnd } from "@angular/router";
import { ViewEncapsulation } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
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

    trigger("slideInOut", [
      transition("* => *, :enter", [
        query(
          ":enter, :leave",
          style({ position: "absolute", width: "100%" }),
          { optional: true }
        ),
        query(":enter", style({ transform: "translateY(100vw)" }), {
          optional: true
        }),
        query(":leave", style({ transform: "translateY(0vw)" }), {
          optional: true
        }),

        group([
          query(
            ":leave",
            [
              animate(
                "500ms ease-in-out",
                style({
                  transform: "translateY(-100vw)"
                })
              )
            ],
            { optional: true }
          ),
          query(
            ":enter",
            [
              animate(
                "500ms ease-in-out",
                style({
                  transform: "translateY(0vw)"
                })
              )
            ],
            { optional: true }
          )
        ])
      ])
    ])
  ]
})
export class AppComponent {
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  title = "Kishore Blog";
  propsToShow = [
    "userAgent",
    "os",
    "browser",
    "device",
    "os_version",
    "browser_version"
  ];
  deviceInfo = null;
  currentURL = null;
  color = "";
  color1 = "";
  Items: Observable<any>[];
  constructor(
    private deviceService: DeviceDetectorService,
    private router: Router,
    db: AngularFirestore
  ) {
    // this.Items = db.collection['Items'].valueChanges();
    // console.log("Items: "+this.Items);
    this.deviceInfo = deviceService.getDeviceInfo();
    // console.log(this.deviceInfo)
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // console.log("current url",event.url); // event.url has current url
        this.currentURL = event.url;
        // your code will goes here
        // if(this.currentURL.match('/about')){
        //   this.color = '#BCA136';
        //   this.color1 = 'rgba(0,0,0,0)';
        // }
      }
    });
  }
  ngOnInit() {
    // this.service.incrementPageCount().then(data => this.service.changeCount(data));

    this.myStyle = {
      position: "fixed",
      width: "100%",
      height: "100%",
      "z-index": -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };

    this.myParams = {
      particles: {
        number: {
          value: 200
        },
        color: {
          value: "#ff0000"
        },
        shape: {
          type: "triangle"
        }
      }
    };

    // let currentUrl = this.router.url; /// this will give you current url
    // console.log("Current URL: "+currentUrl);
    // your logic to know if its my home page.
  }
  getPage(outlet) {
    console.log("Outlet: " + outlet.activatedRouteData["page"]);
    return outlet.activatedRouteData["page"] || "one";
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
  redirect_social(name: any) {
    // console.log(name);
    if (name === "linkedin")
      window.open(
        "https://www.linkedin.com/in/chandrakishoredanduri",
        "_blank"
      );
    else if (name === "github")
      window.open("https://github.com/Kishore180994", "_blank");
    else if (name === "twitter")
      window.open("https://twitter.com/chandrakishore1", "_blank");
    else if (name === "instagram")
      window.open("https://www.instagram.com/kishore189/", "_blank");
  }
}
