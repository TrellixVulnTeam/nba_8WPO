import { Component, OnInit } from '@angular/core';

import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  home = faHome;

  constructor() { }

  ngOnInit() {
  }

}