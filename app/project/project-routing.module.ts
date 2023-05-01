import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { ArtistsongsComponent } from './artistsongs/artistsongs.component';
import { LogGuard } from './log.guard';
import { LoginComponent } from './login/login.component';
import { SonglistComponent } from './songlist/songlist.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'artist',component:ArtistComponent,canActivate:[LogGuard]},

    {path:'songs/:id',component:ArtistsongsComponent},
    {path:'songlist',component:SonglistComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
