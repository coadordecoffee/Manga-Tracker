import { tap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { HttpCacheService } from "./http-cache.service";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpContextToken,
} from "@angular/common/http";
import { Injectable } from "@angular/core";

export const CACHEABLE = new HttpContextToken(() => true);

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor(private cacheService: HttpCacheService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //only cache requests configured to be cacheable
    if (!req.context.get(CACHEABLE)) {
      return next.handle(req);
    }
    if (req.method !== "GET") {
      //pass along non-cacheable requests and invalidate cache
      console.log(`Invalidating cache: ${req.method} ${req.url}`);
      return next.handle(req);
    }

    // attempt to retrieve a cached response
    const cachedResponse: HttpResponse<any> = this.cacheService.get(req.url);

    // return cached response
    if (cachedResponse) {
      console.log(`Returning a cached response: ${cachedResponse.url}`);
      console.log(cachedResponse);
      return of(cachedResponse);
    }

    // send request to server and add response to cache
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          console.log(`Adding item to cache: ${req.url}`);
          this.cacheService.put(req.url, event);
        }
      })
    );
  }
}
