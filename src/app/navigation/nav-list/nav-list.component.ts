import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent implements OnInit {

  @Output() public closeSidenav = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  navListItemClick(){
    this.closeSidenav.emit();
  }

}
