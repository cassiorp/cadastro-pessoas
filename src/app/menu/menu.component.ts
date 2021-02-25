import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isMouseOver = false;

  constructor() { }

  ngOnInit(): void {
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  

}

