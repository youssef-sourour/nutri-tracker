import { Component, OnInit, AfterViewChecked, ChangeDetectorRef, AfterViewInit, OnChanges } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { Router, NavigationEnd, RouteConfigLoadStart, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage {

  buttons = [
    { name: 'Login', link: '/', isButton: true },
    { name: 'Test', link: '/test', isButton: false }
  ];

  headerTitle = 'Test Page';

  constructor() {
  }
}
