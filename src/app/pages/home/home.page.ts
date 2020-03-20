import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  type: 'login' | 'signup' | 'reset' = 'signup';

  constructor(public auth: AuthService) {}

  changeType(type: 'login' | 'signup' | 'reset') {
    this.type = type;
  }

}
