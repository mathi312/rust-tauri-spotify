import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "menu",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./menu.html",
  styleUrl: "./menu.css",
})
export class Menu {
  public libraryActive: boolean = false;
  public homeActive: boolean = false;

  onLibrary() {
    if (this.libraryActive) {
      this.libraryActive = false;
    } else {
      this.libraryActive = true;
    }
  }

  onHome() {
    if (this.homeActive) {
      this.homeActive = false;
    } else {
      this.homeActive = true;
    }
  }
}
