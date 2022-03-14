import { ActivatedRoute } from "@angular/router";
import { BookTrackerError } from "app/models/bookTrackerError";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Title } from "@angular/platform-browser";

import { Book } from "app/models/book";
import { Reader } from "app/models/reader";
import { DataService } from "app/core/data.service";
import { ReaderTrackerError } from "app/models/ReaderTrackerError";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styles: [],
})
export class DashboardComponent implements OnInit {
  allBooks: Book[];
  allReaders: Reader[];
  mostPopularBook: Book;

  constructor(
    private dataService: DataService,
    private title: Title,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let resolvedBookData: Book[] | BookTrackerError =
      this.route.snapshot.data["resolvedBooks"];
    if (resolvedBookData instanceof BookTrackerError) {
      console.log(
        `Dashboard component error: ${resolvedBookData.friendlyMessage}`
      );
    } else {
      this.allBooks = resolvedBookData;
    }
    let resolvedReaderData: Reader[] | ReaderTrackerError =
      this.route.snapshot.data["resolvedReaders"];
    if (resolvedReaderData instanceof ReaderTrackerError) {
      console.log(
        `Dashboard component error: ${resolvedReaderData.friendlyMessage}`
      );
    } else {
      this.allReaders = resolvedReaderData;
    }
    this.mostPopularBook = this.dataService.mostPopularBook;

    this.title.setTitle(`Manga Tracker`);
  }

  deleteBook(bookID: number): void {
    this.dataService.deleteBook(bookID).subscribe(
      (data: void) => {
        let index: number = this.allBooks.findIndex(
          (book) => book.bookID === bookID
        );
        this.allBooks.splice(index, 1);
      },
      (err: any) => console.log(err)
    );
  }

  deleteReader(readerID: number): void {
    this.dataService.deleteReader(readerID).subscribe(
      (data: void) => {
        let index: number = this.allReaders.findIndex(
          (reader) => reader.readerID === readerID
        );
        this.allReaders.splice(index, 1);
      },
      (err: any) => console.log(err)
    );
  }
}
