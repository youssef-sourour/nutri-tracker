import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  constructor(private menu: MenuService) { }

  ngOnInit() {
    this.menu.setHeaderTitle('Test Page');
  }

}
