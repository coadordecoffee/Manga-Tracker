(self["webpackChunkbooktracker"] = self["webpackChunkbooktracker"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 9884:
/*!************************************************!*\
  !*** ./src/app/add-book/add-book.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddBookComponent": () => (/* binding */ AddBookComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_add_book_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-book.component.html */ 7052);
/* harmony import */ var app_core_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/data.service */ 3943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AddBookComponent = class AddBookComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() { }
    saveBook(formValues) {
        let newBook = formValues;
        newBook.bookID = 0;
        console.log(newBook);
        this.dataService
            .addBook(newBook)
            .subscribe((data) => console.log(data)),
            (err) => console.log(err);
    }
};
AddBookComponent.ctorParameters = () => [
    { type: app_core_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService }
];
AddBookComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: "app-add-book",
        template: _raw_loader_add_book_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
    })
], AddBookComponent);



/***/ }),

/***/ 4808:
/*!****************************************************!*\
  !*** ./src/app/add-reader/add-reader.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddReaderComponent": () => (/* binding */ AddReaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_add_reader_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-reader.component.html */ 1699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var app_core_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/data.service */ 3943);




let AddReaderComponent = class AddReaderComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() { }
    saveReader(formValues) {
        let newReader = formValues;
        newReader.readerID = 0;
        console.log(newReader);
        this.dataService
            .addReader(newReader)
            .subscribe((data) => console.log(data)),
            (err) => console.log(err);
    }
};
AddReaderComponent.ctorParameters = () => [
    { type: app_core_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService }
];
AddReaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: "app-add-reader",
        template: _raw_loader_add_reader_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
    })
], AddReaderComponent);



/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _core_readers_resolver_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/readers-resolver.service */ 2268);
/* harmony import */ var _core_books_resolver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/books-resolver.service */ 5349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var app_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/add-book/add-book.component */ 9884);
/* harmony import */ var app_add_reader_add_reader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/add-reader/add-reader.component */ 4808);
/* harmony import */ var app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/dashboard/dashboard.component */ 7528);
/* harmony import */ var app_edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/edit-book/edit-book.component */ 445);
/* harmony import */ var app_edit_reader_edit_reader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/edit-reader/edit-reader.component */ 6236);










const routes = [
    {
        path: "dashboard",
        component: app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent,
        resolve: {
            resolvedBooks: _core_books_resolver_service__WEBPACK_IMPORTED_MODULE_1__.BooksResolverService,
            resolvedReaders: _core_readers_resolver_service__WEBPACK_IMPORTED_MODULE_0__.ReadersResolverService,
        },
    },
    { path: "addbook", component: app_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_2__.AddBookComponent },
    { path: "addreader", component: app_add_reader_add_reader_component__WEBPACK_IMPORTED_MODULE_3__.AddReaderComponent },
    { path: "editreader/:id", component: app_edit_reader_edit_reader_component__WEBPACK_IMPORTED_MODULE_6__.EditReaderComponent },
    { path: "editbook/:id", component: app_edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_5__.EditBookComponent },
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ 1249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _core_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/cache.interceptor */ 7354);
/* harmony import */ var _core_log_response_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/log-response.interceptor */ 9079);
/* harmony import */ var _core_add_header_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/add-header.interceptor */ 1483);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-book/add-book.component */ 9884);
/* harmony import */ var _add_reader_add_reader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-reader/add-reader.component */ 4808);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 7528);
/* harmony import */ var _edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-book/edit-book.component */ 445);
/* harmony import */ var _edit_reader_edit_reader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-reader/edit-reader.component */ 6236);
/* harmony import */ var _core_book_tracker_error_handler_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/book-tracker-error-handler.service */ 9772);
















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent,
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__.DashboardComponent,
            _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_3__.AddBookComponent,
            _edit_reader_edit_reader_component__WEBPACK_IMPORTED_MODULE_9__.EditReaderComponent,
            _edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_8__.EditBookComponent,
            _add_reader_add_reader_component__WEBPACK_IMPORTED_MODULE_4__.AddReaderComponent,
        ],
        providers: [
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ErrorHandler, useClass: _core_book_tracker_error_handler_service__WEBPACK_IMPORTED_MODULE_10__.BookTrackerErrorHandlerService },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS, useClass: _core_add_header_interceptor__WEBPACK_IMPORTED_MODULE_2__.AddHeaderInterceptor, multi: true },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
                useClass: _core_log_response_interceptor__WEBPACK_IMPORTED_MODULE_1__.LogResponseInterceptor,
                multi: true,
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
                useClass: _core_add_header_interceptor__WEBPACK_IMPORTED_MODULE_2__.AddHeaderInterceptor,
                multi: true,
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
                useClass: _core_cache_interceptor__WEBPACK_IMPORTED_MODULE_0__.CacheInterceptor,
                multi: true,
            },
        ],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_6__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 1483:
/*!************************************************!*\
  !*** ./src/app/core/add-header.interceptor.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONTENT_TYPE": () => (/* binding */ CONTENT_TYPE),
/* harmony export */   "AddHeaderInterceptor": () => (/* binding */ AddHeaderInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);



const CONTENT_TYPE = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpContextToken(() => "application/json");
let AddHeaderInterceptor = class AddHeaderInterceptor {
    intercept(req, next) {
        console.log(`AddHeaderInterceptor - ${req.url}`);
        let jsonReq = req.clone({
            setHeaders: { "Content-Type": req.context.get(CONTENT_TYPE) },
        });
        return next.handle(jsonReq);
    }
};
AddHeaderInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], AddHeaderInterceptor);



/***/ }),

/***/ 8856:
/*!***************************************!*\
  !*** ./src/app/core/badge.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgeService": () => (/* binding */ BadgeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let BadgeService = class BadgeService {
    constructor() { }
    getReaderBadge(minutesRead) {
        if (minutesRead > 5000) {
            return "Manga Worm";
        }
        else if (minutesRead > 2500) {
            return "Page Turner";
        }
        else {
            return "Getting Started";
        }
    }
};
BadgeService.ctorParameters = () => [];
BadgeService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: "root",
    })
], BadgeService);



/***/ }),

/***/ 9772:
/*!************************************************************!*\
  !*** ./src/app/core/book-tracker-error-handler.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookTrackerErrorHandlerService": () => (/* binding */ BookTrackerErrorHandlerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var app_models_bookTrackerError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/models/bookTrackerError */ 5582);



let BookTrackerErrorHandlerService = class BookTrackerErrorHandlerService {
    constructor() { }
    handleError(error) {
        let customError = new app_models_bookTrackerError__WEBPACK_IMPORTED_MODULE_0__.BookTrackerError();
        customError.errorNumber = 200;
        customError.message = error.message;
        customError.friendlyMessage = 'An error occurred. Please try again.';
        console.log(customError);
    }
};
BookTrackerErrorHandlerService.ctorParameters = () => [];
BookTrackerErrorHandlerService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], BookTrackerErrorHandlerService);



/***/ }),

/***/ 5349:
/*!************************************************!*\
  !*** ./src/app/core/books-resolver.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooksResolverService": () => (/* binding */ BooksResolverService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ 3943);





let BooksResolverService = class BooksResolverService {
    constructor(dataService) {
        this.dataService = dataService;
    }
    resolve(route, state) {
        return this.dataService.getAllBooks().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((err) => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(err)));
    }
};
BooksResolverService.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_0__.DataService }
];
BooksResolverService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: "root",
    })
], BooksResolverService);



/***/ }),

/***/ 7354:
/*!*******************************************!*\
  !*** ./src/app/core/cache.interceptor.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CACHEABLE": () => (/* binding */ CACHEABLE),
/* harmony export */   "CacheInterceptor": () => (/* binding */ CacheInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var _http_cache_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-cache.service */ 74);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);






const CACHEABLE = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpContextToken(() => true);
let CacheInterceptor = class CacheInterceptor {
    constructor(cacheService) {
        this.cacheService = cacheService;
    }
    intercept(req, next) {
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
        const cachedResponse = this.cacheService.get(req.url);
        // return cached response
        if (cachedResponse) {
            console.log(`Returning a cached response: ${cachedResponse.url}`);
            console.log(cachedResponse);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(cachedResponse);
        }
        // send request to server and add response to cache
        return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse) {
                console.log(`Adding item to cache: ${req.url}`);
                this.cacheService.put(req.url, event);
            }
        }));
    }
};
CacheInterceptor.ctorParameters = () => [
    { type: _http_cache_service__WEBPACK_IMPORTED_MODULE_0__.HttpCacheService }
];
CacheInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], CacheInterceptor);



/***/ }),

/***/ 3943:
/*!**************************************!*\
  !*** ./src/app/core/data.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var app_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/data */ 8387);
/* harmony import */ var app_models_bookTrackerError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/models/bookTrackerError */ 5582);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8307);







let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.mostPopularBook = app_data__WEBPACK_IMPORTED_MODULE_0__.allBooks[0];
    }
    setMostPopularBook(popularBook) {
        this.mostPopularBook = popularBook;
    }
    getAllReaders() {
        return this.http.get("/api/readers");
    }
    getReaderById(id) {
        return this.http.get(`/api/readers/${id}`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                Accept: "application/json",
                Authorization: "my-token",
            }),
        });
    }
    getAllBooks() {
        console.log("Getting all manga from the server.");
        return this.http
            .get("/api/books")
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((err) => this.handleHttpError(err)));
    }
    handleHttpError(error) {
        let dataError = new app_models_bookTrackerError__WEBPACK_IMPORTED_MODULE_1__.BookTrackerError();
        dataError.errorNumber = 100;
        dataError.message = error.statusText;
        dataError.friendlyMessage = "An error occurred retrieving data.";
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(dataError);
    }
    getBookById(id) {
        return this.http.get(`/api/books/${id}`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                Accept: "application/json",
                Authorization: "my-token",
            }),
        });
    }
    getOldBookById(id) {
        return this.http.get(`/api/books/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((b) => ({
            bookTitle: b.title,
            year: b.publicationYear,
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)((classicBook) => console.log(classicBook)));
    }
    addBook(newBook) {
        return this.http.post("/api/books", newBook, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                "Content-Type": "application/json",
            }),
        });
    }
    addReader(newReader) {
        return this.http.post("/api/readers", newReader, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                "Content-Type": "application/json",
            }),
        });
    }
    updateBook(updatedBook) {
        return this.http.put(`/api/books/${updatedBook.bookID}`, updatedBook, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                "Content-Type": "application/json",
            }),
        });
    }
    updateReader(updatedReader) {
        return this.http.put(`/api/readers/${updatedReader.readerID}`, updatedReader, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                "Content-Type": "application/json",
            }),
        });
    }
    deleteBook(bookID) {
        return this.http.delete(`/api/books/${bookID}`);
    }
    deleteReader(readerID) {
        return this.http.delete(`/api/readers/${readerID}`);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: "root",
    })
], DataService);



/***/ }),

/***/ 74:
/*!********************************************!*\
  !*** ./src/app/core/http-cache.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpCacheService": () => (/* binding */ HttpCacheService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let HttpCacheService = class HttpCacheService {
    constructor() {
        this.requests = {};
    }
    put(url, response) {
        this.requests[url] = response;
    }
    get(url) {
        return this.requests[url];
    }
    invalidateUrl(url) {
        this.requests[url] = undefined;
    }
    invalidateCache() {
        this.requests = {};
    }
};
HttpCacheService.ctorParameters = () => [];
HttpCacheService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: "root",
    })
], HttpCacheService);



/***/ }),

/***/ 9079:
/*!**************************************************!*\
  !*** ./src/app/core/log-response.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogResponseInterceptor": () => (/* binding */ LogResponseInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let LogResponseInterceptor = class LogResponseInterceptor {
    intercept(req, next) {
        console.log(`LogResponseInterceptor - ${req.url}`);
        return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.tap)((event) => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpEventType.Response) {
                console.log(event.body);
            }
        }));
    }
};
LogResponseInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], LogResponseInterceptor);



/***/ }),

/***/ 2268:
/*!**************************************************!*\
  !*** ./src/app/core/readers-resolver.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReadersResolverService": () => (/* binding */ ReadersResolverService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ 3943);





let ReadersResolverService = class ReadersResolverService {
    constructor(dataService) {
        this.dataService = dataService;
    }
    resolve(route, state) {
        return this.dataService.getAllReaders().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((err) => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(err)));
    }
};
ReadersResolverService.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_0__.DataService }
];
ReadersResolverService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: "root",
    })
], ReadersResolverService);



/***/ }),

/***/ 7528:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dashboard.component.html */ 9306);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var app_models_bookTrackerError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/models/bookTrackerError */ 5582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var app_core_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/data.service */ 3943);
/* harmony import */ var app_models_ReaderTrackerError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/models/ReaderTrackerError */ 1043);








let DashboardComponent = class DashboardComponent {
    constructor(dataService, title, route) {
        this.dataService = dataService;
        this.title = title;
        this.route = route;
    }
    ngOnInit() {
        let resolvedBookData = this.route.snapshot.data["resolvedBooks"];
        if (resolvedBookData instanceof app_models_bookTrackerError__WEBPACK_IMPORTED_MODULE_1__.BookTrackerError) {
            console.log(`Dashboard component error: ${resolvedBookData.friendlyMessage}`);
        }
        else {
            this.allBooks = resolvedBookData;
        }
        let resolvedReaderData = this.route.snapshot.data["resolvedReaders"];
        if (resolvedReaderData instanceof app_models_ReaderTrackerError__WEBPACK_IMPORTED_MODULE_3__.ReaderTrackerError) {
            console.log(`Dashboard component error: ${resolvedReaderData.friendlyMessage}`);
        }
        else {
            this.allReaders = resolvedReaderData;
        }
        this.mostPopularBook = this.dataService.mostPopularBook;
        this.title.setTitle(`Manga Tracker`);
    }
    deleteBook(bookID) {
        this.dataService.deleteBook(bookID).subscribe((data) => {
            let index = this.allBooks.findIndex((book) => book.bookID === bookID);
            this.allBooks.splice(index, 1);
        }, (err) => console.log(err));
    }
    deleteReader(readerID) {
        this.dataService.deleteReader(readerID).subscribe((data) => {
            let index = this.allReaders.findIndex((reader) => reader.readerID === readerID);
            this.allReaders.splice(index, 1);
        }, (err) => console.log(err));
    }
};
DashboardComponent.ctorParameters = () => [
    { type: app_core_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
DashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-dashboard",
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
    })
], DashboardComponent);



/***/ }),

/***/ 8387:
/*!*************************!*\
  !*** ./src/app/data.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allReaders": () => (/* binding */ allReaders),
/* harmony export */   "allBooks": () => (/* binding */ allBooks)
/* harmony export */ });
const allReaders = [
    {
        readerID: 1,
        name: "Andressa",
        weeklyReadingGoal: 350,
        totalMinutesRead: 5600,
    },
    {
        readerID: 2,
        name: "Matheus",
        weeklyReadingGoal: 210,
        totalMinutesRead: 3000,
    },
    {
        readerID: 3,
        name: "Juan",
        weeklyReadingGoal: 210,
        totalMinutesRead: 3200,
    },
    {
        readerID: 4,
        name: "Lud",
        weeklyReadingGoal: 140,
        totalMinutesRead: 600,
    },
];
const allBooks = [
    {
        bookID: 1,
        title: "Goodnight Punpun",
        author: "Inio Asano",
        publicationYear: 2007,
    },
    {
        bookID: 2,
        title: "Tokyo Ghoul",
        author: "Sui Ishida",
        publicationYear: 2011,
    },
    {
        bookID: 3,
        title: "Berserk",
        author: "Kentaro Miura",
        publicationYear: 1989,
    },
    {
        bookID: 4,
        title: "Planetes",
        author: "Makoto Yukimura",
        publicationYear: 1999,
    },
    {
        bookID: 5,
        title: "Attack on Titan",
        author: "Hajime Isayama",
        publicationYear: 2009,
    },
    {
        bookID: 6,
        title: "Naruto",
        author: "Masashi Kishimoto",
        publicationYear: 1999,
    },
    {
        bookID: 7,
        title: "Chainsaw Man",
        author: "Tatsuki Fujimoto",
        publicationYear: 2018,
    },
];


/***/ }),

/***/ 445:
/*!**************************************************!*\
  !*** ./src/app/edit-book/edit-book.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditBookComponent": () => (/* binding */ EditBookComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_edit_book_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-book.component.html */ 8367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var app_core_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/data.service */ 3943);





let EditBookComponent = class EditBookComponent {
    constructor(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    ngOnInit() {
        let bookID = parseInt(this.route.snapshot.params["id"]);
        this.dataService.getBookById(bookID).subscribe((data) => (this.selectedBook = data), (err) => console.log(err));
        this.dataService
            .getOldBookById(bookID)
            .subscribe((data) => console.log(`Old book title: ${data.bookTitle}`));
    }
    setMostPopular() {
        this.dataService.setMostPopularBook(this.selectedBook);
    }
    saveChanges() {
        this.dataService.updateBook(this.selectedBook).subscribe((data) => console.log(`${this.selectedBook.title} updated successfully.`), (err) => console.log(err));
    }
};
EditBookComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: app_core_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService }
];
EditBookComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: "app-edit-book",
        template: _raw_loader_edit_book_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
    })
], EditBookComponent);



/***/ }),

/***/ 6236:
/*!******************************************************!*\
  !*** ./src/app/edit-reader/edit-reader.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditReaderComponent": () => (/* binding */ EditReaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_edit_reader_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-reader.component.html */ 4644);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var app_core_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/data.service */ 3943);
/* harmony import */ var app_core_badge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/badge.service */ 8856);






let EditReaderComponent = class EditReaderComponent {
    constructor(route, dataService, badgeService) {
        this.route = route;
        this.dataService = dataService;
        this.badgeService = badgeService;
    }
    ngOnInit() {
        let readerID = parseInt(this.route.snapshot.params["id"]);
        this.dataService.getReaderById(readerID).subscribe((data) => (this.selectedReader = data), (err) => console.log(err));
        this.currentBadge = this.badgeService.getReaderBadge(this.selectedReader.totalMinutesRead);
    }
    saveChanges() {
        this.dataService.updateReader(this.selectedReader).subscribe((data) => console.log(`${this.selectedReader.name} updated successfully.`), (err) => console.log(err));
    }
};
EditReaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: app_core_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService },
    { type: app_core_badge_service__WEBPACK_IMPORTED_MODULE_2__.BadgeService }
];
EditReaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-edit-reader",
        template: _raw_loader_edit_reader_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        providers: [app_core_badge_service__WEBPACK_IMPORTED_MODULE_2__.BadgeService],
    })
], EditReaderComponent);



/***/ }),

/***/ 1043:
/*!**********************************************!*\
  !*** ./src/app/models/ReaderTrackerError.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReaderTrackerError": () => (/* binding */ ReaderTrackerError)
/* harmony export */ });
class ReaderTrackerError {
}


/***/ }),

/***/ 5582:
/*!********************************************!*\
  !*** ./src/app/models/bookTrackerError.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookTrackerError": () => (/* binding */ BookTrackerError)
/* harmony export */ });
class BookTrackerError {
}


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);


/***/ }),

/***/ 1249:
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ 7052:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-book/add-book.component.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"col-lg-5\">\n  <div class=\"well bs-component\">\n    <form\n      #addBookForm=\"ngForm\"\n      (ngSubmit)=\"saveBook(addBookForm.value)\"\n      class=\"form-horizontal\"\n    >\n      <fieldset>\n        <legend>Add New Manga</legend>\n        <div class=\"form-group\">\n          <label for=\"inputTitle\" class=\"col-lg-3 control-label\">Title</label>\n          <div class=\"col-lg-8\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"inputTitle\"\n              placeholder=\"Title\"\n              name=\"title\"\n              ngModel\n            />\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputAuthor\" class=\"col-lg-3 control-label\">Author</label>\n          <div class=\"col-lg-8\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"inputAuthor\"\n              placeholder=\"Author\"\n              name=\"author\"\n              ngModel\n            />\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputYear\" class=\"col-lg-3 control-label\">Year</label>\n          <div class=\"col-lg-8\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"inputYear\"\n              placeholder=\"Year Published\"\n              name=\"publicationYear\"\n              ngModel\n            />\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-lg-8 col-lg-offset-3\">\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ 1699:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-reader/add-reader.component.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"col-lg-5\">\n  <div class=\"well bs-component\">\n    <form\n      #addReaderForm=\"ngForm\"\n      (ngSubmit)=\"saveReader(addReaderForm.value)\"\n      class=\"form-horizontal\"\n    >\n      <fieldset>\n        <legend>Add Reader</legend>\n        <div class=\"form-group\">\n          <label for=\"inputGoal\" class=\"col-lg-3 control-label\">Name</label>\n          <div class=\"col-lg-8\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"inputGoal\"\n              placeholder=\"Name\"\n              name=\"name\"\n              ngModel\n            />\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputGoal\" class=\"col-lg-3 control-label\"\n            >Weekly Goal</label\n          >\n          <div class=\"col-lg-8\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"inputGoal\"\n              placeholder=\"Weekly Goal\"\n              name=\"weeklyReadingGoal\"\n              ngModel\n            />\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputTotal\" class=\"col-lg-3 control-label\"\n            >Total Read</label\n          >\n          <div class=\"col-lg-8\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"inputTotal\"\n              placeholder=\"Total Minutes Read\"\n              name=\"totalMinutesRead\"\n              ngModel\n            />\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-lg-10 col-lg-offset-3\">\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button\n        type=\"button\"\n        class=\"navbar-toggle collapsed\"\n        data-toggle=\"collapse\"\n        data-target=\"#bs-example-navbar-collapse-1\"\n      >\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" [routerLink]=\"['/dashboard']\">Manga Tracker</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li>\n          <a [routerLink]=\"['/addbook']\"\n            >Add Manga<span class=\"sr-only\">(current)</span></a\n          >\n        </li>\n        <li><a [routerLink]=\"['/addreader']\">Add Reader</a></li>\n      </ul>\n    </div>\n    <!-- /.navbar-collapse -->\n  </div>\n  <!-- /.container-fluid -->\n</nav>\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ 9306:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">All Manga</h3>\n        </div>\n        <div class=\"panel-body\">\n          <li *ngFor=\"let manga of allBooks\">\n            <i>{{ manga.title }}</i>\n            <a [routerLink]=\"['/editbook', manga.bookID]\"> Edit </a>\n            <a (click)=\"deleteBook(manga.bookID)\">Delete</a>\n          </li>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">All Readers</h3>\n        </div>\n        <div class=\"panel-body\">\n          <li *ngFor=\"let reader of allReaders\">\n            {{ reader.name }}\n            <a [routerLink]=\"['/editreader', reader.readerID]\">Edit</a>\n            <a (click)=\"deleteReader(reader.readerID)\"> Delete </a>\n          </li>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Most Popular Manga</h3>\n        </div>\n        <div class=\"panel-body\">\n          <i>{{ mostPopularBook.title }}</i> by {{ mostPopularBook.author }}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 8367:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-book/edit-book.component.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"col-lg-5\">\n  <div class=\"well bs-component\">\n    <form class=\"form-horizontal\">\n      <fieldset>\n        <legend>Edit Manga</legend>\n        <div class=\"form-group\">\n          <label for=\"inputTitle\" class=\"col-lg-3 control-label\">Title</label>\n          <div class=\"col-lg-8\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"inputTitle\"\n              placeholder=\"Title\"\n              [(ngModel)]=\"selectedBook && selectedBook.title\"\n              name=\"title\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputAuthor\" class=\"col-lg-3 control-label\">Author</label>\n          <div class=\"col-lg-8\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"inputAuthor\"\n              placeholder=\"Author\"\n              [(ngModel)]=\"selectedBook && selectedBook.author\"\n              name=\"author\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputYear\" class=\"col-lg-3 control-label\">Year</label>\n          <div class=\"col-lg-8\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"inputYear\"\n              placeholder=\"Year Published\"\n              [(ngModel)]=\"selectedBook && selectedBook.publicationYear\"\n              name=\"publicationYear\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-lg-8 col-lg-offset-3\">\n            <button\n              type=\"button\"\n              class=\"btn btn-primary\"\n              (click)=\"saveChanges()\"\n            >\n              Save\n            </button>\n            <button\n              type=\"button\"\n              class=\"btn btn-success\"\n              (click)=\"setMostPopular()\"\n            >\n              Set As Most Popular\n            </button>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ 4644:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-reader/edit-reader.component.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"col-lg-5\">\n  <div class=\"well bs-component\">\n    <form class=\"form-horizontal\">\n      <fieldset>\n        <legend>Edit Reader</legend>\n        <div class=\"form-group\">\n          <label for=\"inputGoal\" class=\"col-lg-3 control-label\">Name</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputGoal\" placeholder=\"Name\" [(ngModel)]=\"selectedReader && selectedReader.name\" name=\"name\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputGoal\" class=\"col-lg-3 control-label\">Weekly Goal</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputGoal\" placeholder=\"Weekly Goal\" [(ngModel)]=\"selectedReader && selectedReader.weeklyReadingGoal\" name=\"weeklyReaddingGoal\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputTotal\" class=\"col-lg-3 control-label\">Total Read</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" id=\"inputTotal\" placeholder=\"Total Minutes Read\" [(ngModel)]=\"selectedReader && selectedReader.totalMinutesRead\" name=\"totalMinutesRead\">\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"inputTotal\" class=\"col-lg-3 control-label\">Current Badge</label>\n          <div class=\"col-lg-8\">\n            {{ currentBadge }}\n          </div>\n        </div>\n\n\n        <div class=\"form-group\">\n          <div class=\"col-lg-10 col-lg-offset-3\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveChanges()\">Save</button>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</div>");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map