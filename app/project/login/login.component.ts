import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { ProjService } from '../proj.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form=new FormGroup({
    username:new FormControl(),
    password:new FormControl()
  })

  constructor(private demo: ProjService) {


  }

    log(){
      this.demo.authorization(this.form.value.username,this.form.value.password)
    }


}
