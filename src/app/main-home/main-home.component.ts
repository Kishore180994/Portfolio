import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ɵROUTER_PROVIDERS} from '@angular/router';
import { ContentService } from '../shared/services/content.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css'],
})
export class MainHomeComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private contentService: ContentService) { }

  ngOnInit() {
  }

  scrollToElement(){
    // this.router.navigate(['contact'],{relativeTo: this.route});
    this.router.navigate(['resume']);
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
