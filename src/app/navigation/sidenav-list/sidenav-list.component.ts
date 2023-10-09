import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit{
  
  @Output() sidenavClose = new EventEmitter();
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onClose() {
    this.sidenavClose.emit();
  }

}
