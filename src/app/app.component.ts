import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Kishore Blog';
  propsToShow = ['userAgent', 'os', 'browser', 'device', 'os_version', 'browser_version'];
  deviceInfo = null;
  constructor(private deviceService: DeviceDetectorService){
    this.deviceInfo = deviceService.getDeviceInfo();
    console.log(this.deviceInfo);
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
