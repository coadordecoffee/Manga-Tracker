import { catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { DataService } from "./data.service";
import { BookTrackerError } from "app/models/bookTrackerError";
import { Reader } from "app/models/reader";
import { ReaderTrackerError } from "app/models/ReaderTrackerError";

@Injectable({
  providedIn: "root",
})
export class ReadersResolverService
  implements Resolve<Reader[] | ReaderTrackerError>
{
  constructor(private dataService: DataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Reader[] | ReaderTrackerError> {
    return this.dataService.getAllReaders().pipe(catchError((err) => of(err)));
  }
}
