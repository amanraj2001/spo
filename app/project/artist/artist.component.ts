import { Component } from '@angular/core';
import { artist } from '../model/artistdata';
import { ProjService } from '../proj.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {

  artistdata:Array<artist>=[]
    constructor(private demo:ProjService){
        this.artistdata=this.demo.artist
    }
}
