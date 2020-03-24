import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  type: 'login' | 'signup' | 'reset' = 'signup';

  headerTitle = 'Home';

  constructor(public auth: AuthService) {
  }


}
