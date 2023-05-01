import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { artist } from '../model/artistdata';
import { ProjService } from '../proj.service';

@Component({
  selector: 'app-artistsongs',
  templateUrl: './artistsongs.component.html',
  styleUrls: ['./artistsongs.component.css']
})
export class ArtistsongsComponent implements OnInit {
  // artistdata:Array<artist>=[]
        constructor(private demo:ProjService,private router:Router,private route:ActivatedRoute) {
          // this.artistdata=this.demo.artist
        }
        star:any=false

         output:any
         artist:any
        ngOnInit(): void {
          this.route.params.subscribe(p=>{
            console.log(p['id'])
            this.artist=this.demo.artist.find(x=>x.id==p['id'])
            console.log(this.artist);
            this.output=this.demo.songslist.filter(x=>x.singerid==p['id'])
            console.log(this.output);

          })
        }

        // clc(i:number,z:number){

        //   console.log(this.output);

        //     if(this.star==false && this.output[z]==i){

        //       this.star=true;
        //     }
        //     else{
        //       this.star=false;
        //     }

        // }
        xyz:Array<any>=[]


        clc(i:number,z:boolean){
          this.demo.individual(this.xyz)
          console.log(this.output[i].star);

          if(this.output[i].idi==i && this.output[i].star==false){
            console.log(this.output[i].idi);
            this.output[i].star=true
            this.xyz.push(this.output[i])
            console.log(this.xyz);

          }
          else{
            this.output[i].star=false
            this.xyz.splice(i,1)
          }
        }











}
