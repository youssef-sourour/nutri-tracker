import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  @Output() changeValEmitter = new EventEmitter();

  loginForm: FormGroup;
  type: 'login' | 'signup' | 'reset' = 'signup';
  loading = false;

  constructor(private auth: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.minLength(6), Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.minLength(6), Validators.required]
      ],
      passwordConfirm: ['', []]
    });
  }

  changeType(val: 'login' | 'signup' | 'reset') {
    this.type = val;
    this.changeValEmitter.emit(val);
  }

  get isPasswordReset() {
    return false;
  }

  get passwordDoesMatch() {
    return false;
  }

}
