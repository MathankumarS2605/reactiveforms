import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveforms';
  userData:any=[];
  isShow:boolean=false;
  onSubmit(){
    if(this.userForm.valid){
    console.log(this.userForm.value);
    this.userData.push(this.userForm.value);
    this.isShow = true;
    }
  else{
    console.log("invalid");
    this.isShow = false;
  }
  }
  userForm= new FormGroup({
    firstName: new FormControl('',[Validators.minLength(5) ,Validators.maxLength(9),Validators.required]),
    lastName: new FormControl('',[Validators.minLength(5) ,Validators.maxLength(9),Validators.required]),
    joinDate: new FormControl('03-01-2020',[Validators.required]),
    salary: new FormControl(0,[Validators.required])
  },{
    updateOn:'change'
  }
  );
 
}
