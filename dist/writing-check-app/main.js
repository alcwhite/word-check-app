(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.main {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  height: 100%;\r\n  background-color: lightgray;\r\n  background-repeat: repeat-y;\r\n}\r\nh1 {\r\n  font-family: Helvetica;\r\n  display: block;\r\n  width: 80%;\r\n  padding: 20px 0;\r\n  margin: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <h1>Word Use Check</h1>\n  <app-text></app-text>\n  <app-words></app-words>\n  <app-message></app-message>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _words_words_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./words/words.component */ "./src/app/words/words.component.ts");
/* harmony import */ var _text_text_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text/text.component */ "./src/app/text/text.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _transfer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transfer.service */ "./src/app/transfer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// make test button change on clicking the word instead of on hover
// find word usage for overused unknown words -- ???
// make it recognize forms of a word (-s, -ed, etc.) -- ask if verb or noun, if yes, also check for variations (common ones)
// make it recognize dashes as word breaks -- add to the split function?
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _words_words_component__WEBPACK_IMPORTED_MODULE_4__["WordsComponent"],
                _text_text_component__WEBPACK_IMPORTED_MODULE_5__["TextComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_6__["MessageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [_transfer_service__WEBPACK_IMPORTED_MODULE_7__["TransferService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  display: block;\r\n  margin: 15px auto;\r\n  border: 2px solid teal;\r\n  background-color: paleturquoise;\r\n  font-size: 20px;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n  transition: 0.5s;\r\n}\r\nbutton:hover {\r\n  background-color: teal;\r\n  color: white;\r\n  transition: 0.5s;\r\n}\r\np {\r\n  font-family: Helvetica;\r\n}\r\ndiv.message {\r\n  width: 80%;\r\n  margin: auto;\r\n  background-color: RGBA(0, 128, 128, 0.5);\r\n  padding: 5px 10px;\r\n}\r\ndiv.extra-message {\r\n  width: 80%;\r\n  margin: auto;\r\n  background-color: RGBA(175, 238, 238, 0.5);\r\n  padding: 5px 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <button (click)=\"showMessage()\" (mouseenter)=\"setData()\" (focus)=\"setData()\">Test<em *ngIf=\"buttonWord\">{{' ' + buttonWord}}</em></button>\n  <div *ngIf=\"active\" class=\"message\">\n    <p>You have used the word \"{{ word }}\" {{ num }} {{ num === 1 ? \"time\" : \"times\" }} in {{ total }} words.</p>\n    <div *ngIf=\"percent >= 0.5\" class=\"message extra-message\">\n      <p>This constitutes {{ percent }}% of your total word count.</p>\n      <p *ngIf=\"percent > 1\">If this is not a name, article, or conjunction, you may want to consider replacing some instances of it.</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _transfer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transfer.service */ "./src/app/transfer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageComponent = /** @class */ (function () {
    function MessageComponent(_transfer) {
        var _this = this;
        this._transfer = _transfer;
        this.active = false;
        this.num = 0;
        // triggers when Test button is clicked
        this.showMessage = function () {
            _this.word = _this._transfer.word;
            _this.text = _this._transfer.text;
            _this.total = _this._transfer.total;
            if (_this._transfer.active && _this.total > 11) {
                _this.active = true;
            }
            _this.checkWord = new RegExp('\\b' + _this.word + '\\b', 'ig');
            _this.calculateUsage();
            if (_this.total >= 5000) {
                _this.calculatePercent();
            }
        };
        // sets variable (for button text)
        this.setData = function () {
            _this.buttonWord = _this._transfer.word;
        };
        // calculates number of usages of the chosen word
        this.calculateUsage = function () {
            if (_this.text.match(_this.checkWord)) {
                _this.num = _this.text.match(_this.checkWord).length;
                return _this.num;
            }
            else {
                _this.num = 0;
            }
        };
        // calculates percentage of text that is the chosen word
        this.calculatePercent = function () {
            var decimal = (_this.num / _this.total) * 100;
            _this.percent = parseFloat(decimal.toFixed(2));
        };
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [_transfer_service__WEBPACK_IMPORTED_MODULE_1__["TransferService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/text/text.component.css":
/*!*****************************************!*\
  !*** ./src/app/text/text.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea {\r\n  width: 80%;\r\n  height: 100px;\r\n  margin: auto;\r\n  display: block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/text/text.component.html":
/*!******************************************!*\
  !*** ./src/app/text/text.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <h2>Input text to check word use</h2>\n  <textarea [(ngModel)]=\"text\" (ngModelChange)=\"inputText()\"></textarea>\n</div>\n"

/***/ }),

/***/ "./src/app/text/text.component.ts":
/*!****************************************!*\
  !*** ./src/app/text/text.component.ts ***!
  \****************************************/
/*! exports provided: TextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextComponent", function() { return TextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _transfer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transfer.service */ "./src/app/transfer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextComponent = /** @class */ (function () {
    function TextComponent(_transfer) {
        var _this = this;
        this._transfer = _transfer;
        // sets text variables and sends them across app
        this.inputText = function () {
            _this._transfer.text = _this.text.trim();
            if (_this.text.trim() === '') {
                _this._transfer.total = 0;
            }
            else {
                _this._transfer.total = _this.text.trim().split(' ').length;
            }
        };
    }
    TextComponent.prototype.ngOnInit = function () {
    };
    TextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-text',
            template: __webpack_require__(/*! ./text.component.html */ "./src/app/text/text.component.html"),
            styles: [__webpack_require__(/*! ./text.component.css */ "./src/app/text/text.component.css")]
        }),
        __metadata("design:paramtypes", [_transfer_service__WEBPACK_IMPORTED_MODULE_1__["TransferService"]])
    ], TextComponent);
    return TextComponent;
}());



/***/ }),

/***/ "./src/app/transfer.service.ts":
/*!*************************************!*\
  !*** ./src/app/transfer.service.ts ***!
  \*************************************/
/*! exports provided: TransferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferService", function() { return TransferService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TransferService = /** @class */ (function () {
    function TransferService() {
    }
    TransferService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TransferService);
    return TransferService;
}());



/***/ }),

/***/ "./src/app/words/words.component.css":
/*!*******************************************!*\
  !*** ./src/app/words/words.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\r\n  background-color: teal;\r\n  color: white;\r\n}\r\nbutton {\r\n  border: 0;\r\n  display: inline-block;\r\n  margin: 3px;\r\n  padding: 7px;\r\n  background-color: paleturquoise;\r\n  font-family: Helvetica, sans-serif;\r\n}\r\n.buttons {\r\n  width: 80%;\r\n  margin: 10px auto;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: center;\r\n\r\n}\r\nh2 {\r\n  font-family: Helvetica;\r\n  display: block;\r\n  width: 80%;\r\n  margin: 10px auto;\r\n}\r\n.new-word {\r\n  width: 80%;\r\n  margin: auto;\r\n}\r\ninput[type=\"text\"] {\r\n  margin-left: 5px;\r\n}\r\nlabel {\r\n  font-family: Helvetica;\r\n}\r\n"

/***/ }),

/***/ "./src/app/words/words.component.html":
/*!********************************************!*\
  !*** ./src/app/words/words.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <h2>Select a word to check it</h2>\n  <div class=\"buttons\">\n    <button class=\"word-group\" *ngFor=\"let word of words, let i = index\" id=\"id{{i}}\" (click)=\"toggleWord(i)\">{{word}}</button>\n  </div>\n  <div class=\"new-word\">\n    <label for=\"new-word\">Add a new word:</label>\n    <input type=\"text\" id=\"new-word\" value=\"''\" [(ngModel)]=\"newWord\" (keyup.enter)=\"addWord(newWord)\">\n    <input type=\"submit\" value=\"Add\" (click)=\"addWord(newWord)\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/words/words.component.ts":
/*!******************************************!*\
  !*** ./src/app/words/words.component.ts ***!
  \******************************************/
/*! exports provided: WordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordsComponent", function() { return WordsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _transfer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transfer.service */ "./src/app/transfer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WordsComponent = /** @class */ (function () {
    function WordsComponent(_transfer) {
        var _this = this;
        this._transfer = _transfer;
        // default words to check
        this.words = [
            "often",
            "very",
            "really",
            "just",
            "somewhat",
            "quite",
            "basically",
            "then",
            "actually"
        ];
        // adds new word to check
        this.addWord = function (word) {
            word = word.toLowerCase().trim();
            if (_this.words.indexOf(word) === -1 && word !== "") {
                _this.words.push(word);
            }
            _this.newWord = '';
        };
        // chooses which word to check
        this.toggleWord = function (index) {
            var thisWord = document.getElementById("id" + index);
            for (var i = 0; i < _this.words.length; i++) {
                var eachWord = document.getElementById("id" + i);
                if (eachWord.classList.contains("active")) {
                    eachWord.classList.remove("active");
                }
            }
            thisWord.classList.add("active");
            _this.word = thisWord.innerHTML;
            _this._transfer.word = _this.word;
            _this._transfer.active = true;
        };
    }
    WordsComponent.prototype.ngOnInit = function () {
    };
    WordsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-words',
            template: __webpack_require__(/*! ./words.component.html */ "./src/app/words/words.component.html"),
            styles: [__webpack_require__(/*! ./words.component.css */ "./src/app/words/words.component.css")]
        }),
        __metadata("design:paramtypes", [_transfer_service__WEBPACK_IMPORTED_MODULE_1__["TransferService"]])
    ], WordsComponent);
    return WordsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Allison\Desktop\Projects\writing-check-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map