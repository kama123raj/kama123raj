import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 

  loginForm!: FormGroup;
  submitted:boolean = false;
  loading: boolean = false;
  error: any;

  constructor( private formBulder:FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.loginForm = this.formBulder.group({
      username:['', Validators.required],
      password:['', Validators.required]
    })
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }
  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
 
  }


}
