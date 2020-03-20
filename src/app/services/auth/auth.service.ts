import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { DbService } from '../db/db.service';
import { Router } from '@angular/router';
import { Platform, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: any;
  constructor(
    private afAuth: AngularFireAuth,
    private db: DbService,
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    private gplus: GooglePlus,
    private loadingController: LoadingController) {
      this.user$ = afAuth.authState.pipe(
        switchMap(user => (user ? db.doc$(`users/${user.uid}`) : of(null)))
      );
    }

    async signOut() {
      await this.afAuth.auth.signOut();
      return this.router.navigate(['/home']);
    }

    /*** Email Auth ***/



    /***  Google Auth ***/
    setRedirect(val) {
      return this.storage.set('authRedirect', val);
    }

    async googleLogin() {
      try {
        let user;
        if (this.platform.is('cordova')) {
          user = await this.nativeGoogleLogin();
        } else {
          // await this.setRedirect(true);
          const provider = new auth.GoogleAuthProvider();
          user = await this.afAuth.auth.signInWithRedirect(provider);
          console.log(user);
        }
      } catch (err) {
        console.log(err);
      }
    }

    async nativeGoogleLogin(): Promise<any> {
      const gplusUser = await this.gplus.login({
        webClientId: '229578221590-g92q81q32vjr20eq10t8mvtp39fq2erm.apps.googleusercontent.com',
        offline: true,
        scopes: 'profile email'
      });

      return await this.afAuth.auth.signInWithCredential(
        auth.GoogleAuthProvider.credential(gplusUser.idToken)
      );
    }
}
