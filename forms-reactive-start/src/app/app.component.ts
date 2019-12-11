import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
forbiddenName:string[]=['praba','dinesh'];
  signUpForm:FormGroup;
  ngOnInit(){
    this.signUpForm = new FormGroup({
      "username":new FormControl(null,[Validators.required,this.forbiddenNameValidator.bind(this)]),
      "email":new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmailValidator),
      "gender":new FormControl("male")
    });

    const ob =  Observable.create((observer)=>{
      setTimeout(() => {
      observer.next('hi');
        
      }, 5000);
    });
  }

  forbiddenNameValidator(contro:FormControl):{[s:string]:boolean}{
if(this.forbiddenName.indexOf(contro.value)!=-1)
return {'forbidden name':true};
else
return null;
  }

forbiddenEmailValidator(contro:FormControl):Promise<any> | Observable<any>
{
const promise = new Promise((resolve,reject)=>{

  setTimeout(() => {
    if(contro.value==='prabaei@gmail.com')
    resolve({'forbidden name':true});
    else
    resolve(null)
  }, 1000);
})
return promise;
}

  submitForm(){
    console.log(this.signUpForm);
  }
}
