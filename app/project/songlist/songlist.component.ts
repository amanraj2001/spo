import { Component } from '@angular/core';
import { songlist } from '../model/artistdata';
import { ProjService } from '../proj.service';

@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.component.html',
  styleUrls: ['./songlist.component.css']
})
export class SonglistComponent {
  Slist:Array<songlist>=[]
    constructor(private demo:ProjService) {
          this.Slist=this.demo.indlist
    }
}
