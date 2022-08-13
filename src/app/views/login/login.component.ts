import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { 
    this.form = this.fb.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  validarDatos() {
    const User : User = {
      username: this.form.value.Username,
      password: this.form.value.Password
    }

    /*console.log(this.form);
    console.log(User);*/

    if (User.password != '' && User.username != '') {
      this.router.navigate(['/team']);
    }
  }
}
