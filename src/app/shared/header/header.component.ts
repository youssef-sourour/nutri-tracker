import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() headerTitle: string;
  @Input() canSearch = false;
  @Input() color: 'primary' | 'secondary' | 'tertiary' | 'success'
  | 'warning' | 'danger'| 'light' | 'medium' | 'dark' | 'none' = 'none';
  constructor() { }

  ngOnInit() {}

}
