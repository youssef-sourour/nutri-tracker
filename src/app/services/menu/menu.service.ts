import { Injectable } from '@angular/core';
import { IonMenu } from '@ionic/angular';
import { MenuComponent } from 'src/app/shared/menu/menu.component';
import { Observable, BehaviorSubject } from 'rxjs';

/**
 * Communicates with App-Menu to update its status
 */
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menu$: BehaviorSubject<MenuData>;
  menuData$: Observable<MenuData>;

  constructor() {
    this.menu$ = new BehaviorSubject({ headerTitle: 'Initial Menu Header'});
    this.menuData$ = this.menu$.asObservable();
  }

  setMenuData(data: MenuData) {
    this.menu$.next(data);
  }

  setHeaderTitle(header: string) {
    const data = this.menu$.getValue();
    data.headerTitle = header;

    this.menu$.next(data);
  }

}
