import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-lib-x',
  templateUrl: 'lib-x.component.html',
  styles: [
  ]
})
export class LibXComponent implements OnInit {

  dataSource = [
    { date: Date.parse('2022/05/05'), description: 'Server maintainance (planned)' },
    { date: Date.parse('2022/01/03'), description: 'New year holiday' },
    { date: Date.parse('2022/01/02'), description: 'New year holiday' },
    { date: Date.parse('2022/01/01'), description: 'New year holiday' },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
