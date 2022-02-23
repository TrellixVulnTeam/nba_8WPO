import { Component, OnInit, Input } from '@angular/core';

import { Player } from 'src/app/model/model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() resultsByPage: Player[];
  @Input() colHeadings: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
