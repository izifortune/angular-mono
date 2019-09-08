import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-second',
  template: `
    <p>
      second works!
    </p>
  `,
  styles: []
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
