import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { LoginComponent } from './login/login.component';
import { ArtistComponent } from './artist/artist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArtistsongsComponent } from './artistsongs/artistsongs.component';
import { SonglistComponent } from './songlist/songlist.component';


@NgModule({
  declarations: [
    LoginComponent,
    ArtistComponent,
    ArtistsongsComponent,
    SonglistComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProjectModule { }
