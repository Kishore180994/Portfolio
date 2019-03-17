import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Renderer2 } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FullpageDirective } from "./shared/directives/fullpage.directive";
import { DeviceDetectorModule } from "ngx-device-detector";

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from "@angular/material";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AgmCoreModule } from "@agm/core";
import { environment } from "../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { ContentService } from "./shared/services/content.service";
import { ParticlesModule } from "angular-particle";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { CubeComponent } from "./cube/cube.component";
import { PopupModule } from 'ng2-opd-popup';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
  ],
  declarations: [CubeComponent]
})
export class MaterialMode { }

@NgModule({
  declarations: [AppComponent, FullpageDirective, routingComponents],
  imports: [
    BrowserModule,
    ParticlesModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MaterialMode,
    FormsModule,
    MatCardModule,
    AppRoutingModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, "angularfs"),
    AngularFirestoreModule,
    PopupModule.forRoot(),
    DeviceDetectorModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDf-T2SLsOBCxPwDGBYpXg"
    })
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
