import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { artist, songlist } from './model/artistdata';

@Injectable({
  providedIn: 'root'
})
export class ProjService {

  constructor(private router:Router) { }

  avail:boolean=false
  authorization(user:string,pass:string){
   if(user=='admin' && pass=='password'){
    this.avail=true
    this.router.navigate(['artist'])
   }
   else{
    this.avail=false
   }

  }

  islogged(){
    return this.avail
  }

// artist data
artist:Array<artist>=[
  {id:0,name:'Taylor Swift',image:'https://tse4.mm.bing.net/th/id/OIP.7wY9gEzc9JkrzAQ_NIn_uwHaEK?w=329&h=184&c=7&r=0&o=5&pid=1.7',desc:"Taylor Swift is an American singer, songwriter, record producer, actress, and music video director who is one of the best-selling music artists of all time as she has sold more than 50 million albums and 150 million singles worldwide."},
  {id:1,name:'Bruno Mars',image:'https://tse3.mm.bing.net/th/id/OIP.ukorvzTa0FbD2oAy6Yb4gAHaGB?w=225&h=183&c=7&r=0&o=5&pid=1.7',desc:"Bruno Mars, byname of Peter Gene Hernandez, (born October 8, 1985, Honolulu, Hawaii, U.S.), American singer and songwriter who was known for both his catchy pop music—which often featured upbeat lyrics, blended different genres"},
  {id:2,name:'Eminem',image:'https://tse3.mm.bing.net/th/id/OIP.loTV9uWcBXYiiRUaEAt2xAHaEc?w=317&h=190&c=7&r=0&o=5&pid=1.7',desc:"Marshall Bruce Mathers III, known professionally as Eminem, is an American rapper, songwriter, and record producer. He is credited with popularizing hip hop in middle America and is critically acclaimed as one of the greatest rappers of all time."}

]


songslist:Array<songlist>=[
  // {singerid:0,name:"taylor",songs:[]}
  {pre:true,idi:0,singerid:0,songname:"Ts1",totallikes:440,star:false},
  {pre:true,idi:1,singerid:0,songname:"Ts2",totallikes:440,star:false},
  {pre:false,idi:2,singerid:0,songname:"Ts3",totallikes:440,star:false},
  {pre:true,idi:3,singerid:0,songname:"Ts4",totallikes:440,star:false},
  {pre:false,idi:4,singerid:0,songname:"Ts5",totallikes:440,star:false},

  {pre:true,idi:0,singerid:1,songname:"Bruno mars1",totallikes:52,star:false},
  {pre:true,idi:1,singerid:1,songname:"Bruno mars2",totallikes:52,star:false},
  {pre:true,idi:2,singerid:1,songname:"Bruno mars3",totallikes:52,star:false},
  {pre:true,idi:3,singerid:1,songname:"Bruno mars4",totallikes:52,star:false},
  {pre:true,idi:4,singerid:1,songname:"Bruno mars5",totallikes:52,star:false},

  {pre:true,idi:0,singerid:2,songname:"Eminem1",totallikes:250,star:false},
  {pre:true,idi:1,singerid:2,songname:"Eminem2",totallikes:250,star:false},
  {pre:true,idi:2,singerid:2,songname:"Eminem3",totallikes:250,star:false},
  {pre:true,idi:3,singerid:2,songname:"Eminem4",totallikes:250,star:false},
  {pre:true,idi:4,singerid:2,songname:"Eminem5",totallikes:250,star:false},


]
indlist:Array<songlist>=[]

individual(data:Array<songlist>){

this.indlist=data

}








}
