import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-lib1',
  template: `
    <p>
      lib1 works! In apps 2
    </p>
  `,
  styles: ['p { border: 1px solid red;}']
})
export class Lib1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
