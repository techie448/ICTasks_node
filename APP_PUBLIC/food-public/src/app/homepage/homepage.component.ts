import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styles: []
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pageContent = {
    header: {
      title: 'My Food List',
      body: 'This is a list of the meals I have eaten'
    }
  }

}
