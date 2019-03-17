import {
  Component,
  OnInit,
  NgModule,
  Directive,
  HostListener,
  Input
} from "@angular/core";
import { ContentService } from "../shared/services/content.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AccrodionComponent } from "../shared/accrodion/accrodion.component";
import { MatSelectModule, MatSelect } from "@angular/material/select";
import { MatCardModule } from "@angular/material/card";
import { mail } from "../models/mail";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { verticalTransitions } from "../verticalTransitions";
declare const THREE: any;
@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.css"],
  animations: [
    verticalTransitions,
    trigger("changeState", [
      state(
        "formc",
        style({
          transform: "perspective(0) rotateY(0deg)"
        })
      ),
      state(
        "forma",
        style({
          transform: "perspective(0) rotateY(0deg)"
        })
      ),
      state("none", style({})),
      transition("*=>*", animate("500ms"))
    ])
  ],
  host: { "[@verticalTransitions]": "" }
})
// @Directive({
//   selector:'[mat-select-trigger]'
// })
@NgModule({
  imports: [AccrodionComponent, FormsModule, BrowserModule],
  exports: [MatSelect]
})
export class PageComponent implements OnInit {
  public currentState: string = "none";
  lat: number = 39.730911;
  lng: number = -84.163767;
  optionsSelect: Array<any>;
  email: any;
  page: Object;
  isOpened = true;
  // name:string;
  defaultApp: any;
  model: mail[] = [
    {
      name: "",
      subject: "",
      email: "",
      message: ""
    }
  ];
  updateMail: mail[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentService: ContentService
  ) {
    this.currentState = "none";
  }
  ngOnInit() {
    this.contentService.getItems().subscribe(Items => {
      // console.log(Items);
    });
  }

  @HostListener("mousewheel", ["$event"]) onMousewheel(event) {
    if (event.wheelDelta > 0) {
      // this.router.navigate(['contact']);
    }
    if (event.wheelDelta < 0) {
      // event.srcElement.style.setProperty('transition','all 200ms ease-out');
      this.router.navigate(["portfolio"]);
    }
  }

  processForm() {
    // alert(this.name);
  }

  formChange(formtype) {
    //console.log(this.currentState);
    this.currentState = formtype;
    //console.log(this.currentState);
  }

  onSubmit() {
    //alert(this.model[0].name);
  }

  scrollToElement() {
    // this.router.navigate(['contact'],{relativeTo: this.route});
    this.router.navigate(["home"]);
    //window.open('home','_self');
  }

  MailUpdate() {
    this.email = this.model[0].email;
    var regex = new RegExp("^.+@[^.].*.[a-z]{2,}$");
    var test = regex.test(this.email);
    if (test === true) {
      this.contentService.addItem(this.model[0]);
      alert(
        "Your message is succesfully delivered to me. Thank you for reviewing my portfolio"
      );
      this.model = [
        {
          name: "",
          subject: "",
          email: "",
          message: ""
        }
      ];
    } else {
      alert("Invalid Email address. please validate your input");
    }
  }
}
