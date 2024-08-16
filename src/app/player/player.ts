import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "music-player",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./player.html",
  styleUrl: "./player.css",
})
export class Player {
  public isPlaying: boolean = false;
  public isShuffle: boolean = false;
  public isLoop: boolean = false;
  public isLoopOne: boolean = false;

  public trackLenght: string = "0:00";
  public currentTrackTime: string = "0:00";
  public trackPercent: string = "0%";

  public song: Song = new Song("Would that I", "Hozier", "test");

  onPlay() {
    if (this.isPlaying) {
      this.isPlaying = false;
    } else {
      this.isPlaying = true;
    }
  }

  onLast() {}

  onNext() {}

  onShuffle() {
    if (this.isShuffle) {
      this.isShuffle = false;
    } else {
      this.isShuffle = true;
    }
  }

  onLoop() {
    if (this.isLoop) {
      if (this.isLoopOne) {
        // third click
        this.isLoopOne = false;
        this.isLoop = false;
      } else {
        // second click
        this.isLoopOne = true;
      }
    } else {
      // first click
      this.isLoop = true;
    }
  }
}

export class Song {
  public title: string;
  public artist: string;
  public album: string;

  constructor(title: string, artist: string, album: string) {
    this.title = title;
    this.artist = artist;
    this.album = album;
  }
}
