import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-lib2',
  template: `
    <p>
      lib2 works!
      <lib-lib1></lib-lib1>
      <lib-lib3></lib-lib3>
    </p>
  `,
  styles: ['p {border: 1px solid blue;}']
})
export class Lib2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
