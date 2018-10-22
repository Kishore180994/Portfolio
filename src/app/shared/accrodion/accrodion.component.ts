import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-accrodion',
  templateUrl: './accrodion.component.html',
  styleUrls: ['./accrodion.component.css']
})

export class AccrodionComponent implements OnInit {
  panelExpanded = true;
  fin:any;
  constructor(private http: Http) { }

  ngOnInit() {
    // const aboutData = this.route.snapshot.data['about'];
    // this.about = this.contentService.abouts[aboutData];
    this.http.get('../../assets/info.txt').subscribe(data => {
      // console.log(data.text());
      this.fin = data.text().toString();
    })
  } 

  expandPanel(){
    this.panelExpanded = !(this.panelExpanded);
  }
}
