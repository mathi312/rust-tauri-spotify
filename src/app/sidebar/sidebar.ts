import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "sidebar",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./sidebar.html",
  styleUrl: "./sidebar.css",
})
export class Sidebar {
  public dropdown: boolean = false;
  public playlists: Array<Playlist> = [];

  onDropdown() {
    if (this.dropdown) {
      this.dropdown = false;
      this.playlists = [];
    } else {
      this.dropdown = true;
      this.playlists.push(new Playlist("title1"));
      this.playlists.push(new Playlist("title2"));
      this.playlists.push(new Playlist("title3"));
      this.playlists.push(new Playlist("title4"));
    }
  }
}

export class Playlist {
  public title: string;

  constructor(title: string) {
    this.title = title;
  }
}
