import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  @Input()
  content;

  constructor() { }

  ngOnInit(): void {
  }

}
