import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  showSubMenu: boolean = false;
  constructor(private el: ElementRef) {
  }

  // Close navbar dropdown if we click anywhere
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.showSubMenu = false;
    }
  }

  // Toggles dropdown menu
  showDropdown() {
    this.showSubMenu = !this.showSubMenu;
    console.log(this.showSubMenu);
  }

}
