import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  showSubMenu: boolean = false;

  showDropdown() {
    this.showSubMenu = !this.showSubMenu;
    console.log(this.showSubMenu);
  }

}
