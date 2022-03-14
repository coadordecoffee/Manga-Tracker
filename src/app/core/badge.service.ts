import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BadgeService {
  constructor() {}

  getReaderBadge(minutesRead: number): string {
    if (minutesRead > 5000) {
      return "Manga Worm";
    } else if (minutesRead > 2500) {
      return "Page Turner";
    } else {
      return "Getting Started";
    }
  }
}
