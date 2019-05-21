import { NgModule } from "@angular/core";
import { RouterModule, Routes, Router } from "@angular/router";

import { PageComponent } from "./page/page.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { MainHomeComponent } from "./main-home/main-home.component";
import { AccrodionComponent } from "./shared/accrodion/accrodion.component";
import { ResumeComponent } from "./resume/resume.component";
import { PortfoilioComponent } from "./portfoilio/portfoilio.component";

export const appRoutes: Routes = [
  // { path: "", redirectTo: "", pathMatch: "full" },
  { path: "", component: HomeComponent, data: { animation: "home" } },
  { path: "about", component: AboutComponent, data: { animation: "about" } },
  { path: "contact", component: PageComponent, data: { animation: "contact" } },
  {
    path: "portfolio",
    component: PortfoilioComponent,
    data: { animation: "portfolio" }
  },
  { path: "resume", component: ResumeComponent, data: { animation: "resume" } },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true } // <-- debugging purposes only
    // )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  AboutComponent,
  PageComponent,
  ResumeComponent,
  MainHomeComponent,
  AccrodionComponent,
  PortfoilioComponent
];
