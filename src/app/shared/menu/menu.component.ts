import { Component, OnInit, Input } from '@angular/core';
import { IonButtons, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  // header items
  @Input() headerTitle: string;

  buttonsList: IonButtons;
  buttons: any[]; // not yet sure which one to use - but should be btn properties

  constructor() { }

  ngOnInit() {}

}
