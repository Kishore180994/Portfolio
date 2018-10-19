
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { PageComponent } from './page/page.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { MainHomeComponent } from './main-home/main-home.component';

export const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: PageComponent},
  {path: 'resume', component: ResumeComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true } // <-- debugging purposes only
    // )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
export const routingComponents = [HomeComponent, AboutComponent, PageComponent, ResumeComponent, MainHomeComponent];