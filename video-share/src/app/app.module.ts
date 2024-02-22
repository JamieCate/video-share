import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VideoComponentComponent } from './video-component/video-component.component';
import { VideoService } from './services/videos.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';

const approutes: Routes = [
  {
    path: '',
    component: VideoComponentComponent,
  },
  {
    path: 'videos',
    component: VideoComponentComponent,
  },
];

@NgModule({
  declarations: [AppComponent, NavBarComponent, VideoComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    RouterModule.forRoot(approutes),
  ],
  providers: [VideoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
