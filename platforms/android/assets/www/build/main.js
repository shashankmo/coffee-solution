webpackJsonp([0],{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_category_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_item__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_item_service__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var CategoryPage = (function () {
    function CategoryPage(nav, categoryService, navParams, itemService) {
        this.nav = nav;
        this.categoryService = categoryService;
        this.navParams = navParams;
        this.itemService = itemService;
        this.category = navParams.get('category');
        this.items = itemService.findByCategory(this.category);
    }
    // view item detail
    CategoryPage.prototype.viewItem = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__item_item__["a" /* ItemPage */], { item: item });
    };
    return CategoryPage;
}());
CategoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-category',template:/*ion-inline-start:"/Users/devanshuchandra/Desktop/Garlex/src/pages/category/category.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ category.name }}</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div class="list-items">\n    <div class="item-menu" *ngFor="let item of items | async" (click)="viewItem(item)">\n\n      <img src="{{ item.thumb }}" alt="{{ item.name }}"/>\n\n      <div class="overlay">\n\n        <span class="pull-left" ion-text color="light">\n          {{ item.name }}\n        </span>\n\n        <span class="pull-right" ion-text color="light">\n          ${{ item.price }}\n        </span>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/devanshuchandra/Desktop/Garlex/src/pages/category/category.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__services_item_service__["a" /* ItemService */]])
], CategoryPage);

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(nav, authService, alertCtrl, loadingCtrl) {
        this.nav = nav;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    // go to register page
    LoginPage.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    // login and go to home page
    LoginPage.prototype.login = function () {
        var _this = this;
        if (!this.email || !this.password) {
            var alert_1 = this.alertCtrl.create({
                message: 'Please provide email and password',
                buttons: ['OK']
            });
            return alert_1.present();
        }
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.authService.login(this.email, this.password).then(function (authData) {
            loading.dismiss();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, function (error) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                message: error.message,
                buttons: ['OK']
            });
            alert.present();
        });
        //this.nav.setRoot(HomePage);
    };
    // login with facebook
    LoginPage.prototype.loginWithFacebook = function () {
        this.authService.loginWithFacebook();
    };
    // login with google
    LoginPage.prototype.loginWithGoogle = function () {
        this.authService.loginWithGoogle();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/devanshuchandra/Desktop/Garlex/src/pages/login/login.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content class="auth-bg">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding text-center>\n      <div class="logo primary-bg">\n        <ion-icon name="md-restaurant" color="light"></ion-icon>\n      </div>\n      <h2 ion-text color="light">\n        Ionic 2 Restaurant\n      </h2>\n    </div>\n\n    <!-- Login form -->\n    <ion-list class="list-form" padding>\n\n      <ion-item>\n        <ion-label stacked>Email</ion-label>\n        <ion-input type="email" [(ngModel)]="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="password"></ion-input>\n      </ion-item>\n\n    </ion-list>\n\n    <div>\n      <button ion-button block color="primary" (click)="login()">\n        SIGN IN\n      </button>\n\n      <p text-center ion-text color="light">Or</p>\n\n      <button ion-button block color="fb-color" (click)="loginWithFacebook()">\n        <span>Sign in with Facebook</span>\n      </button>\n      <button ion-button block color="gg-color" (click)="loginWithGoogle()">\n        <span ion-text color="primary">Sign in with Google</span>\n      </button>\n    </div>\n\n    <p text-right ion-text color="light">Forgot Password?</p>\n\n\n    <!-- Other links -->\n    <div text-center margin-top>\n      <span ion-text color="light" (click)="register()">New here? Sign up</span>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/devanshuchandra/Desktop/Garlex/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_chats__ = __webpack_require__(433);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatService = (function () {
    function ChatService() {
        this.chats = __WEBPACK_IMPORTED_MODULE_1__mock_chats__["a" /* CHATS */];
    }
    ChatService.prototype.getAll = function () {
        return this.chats;
    };
    ChatService.prototype.getItem = function (id) {
        for (var i = 0; i < this.chats.length; i++) {
            if (this.chats[i].id === parseInt(id)) {
                return this.chats[i];
            }
        }
        return null;
    };
    ChatService.prototype.remove = function (item) {
        this.chats.splice(this.chats.indexOf(item), 1);
    };
    return ChatService;
}());
ChatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ChatService);

//# sourceMappingURL=chat-service.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var OrderDetailPage = (function () {
    function OrderDetailPage(nav, orderService, navParams) {
        this.nav = nav;
        this.orderService = orderService;
        this.navParams = navParams;
        this.order = navParams.get('order');
    }
    return OrderDetailPage;
}());
OrderDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-order-detail',template:/*ion-inline-start:"/Users/devanshuchandra/Desktop/Garlex/src/pages/order-detail/order-detail.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="{{ order.status }}">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ order.number }} ({{ order.status}})</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <!-- order items -->\n  <ion-list>\n    <ion-item *ngFor="let item of order.items">\n      <div>\n        <span class="pull-left"><span ion-text color="secondary">{{ item.name }} </span>x {{ item.quantity }}</span>\n        <span class="pull-right">${{ item.subtotal * item.quantity }}</span>\n        <div class="clear"></div>\n      </div>\n      <div class="text-sm" padding-left *ngIf="item.size">\n        {{ item.size.name }}\n      </div>\n      <div class="text-sm" padding-left *ngFor="let option of item.options">\n        {{ option.name }}\n      </div>\n      <div padding-left *ngFor="let tax of item.taxes">\n        <span class="pull-left text-sm">{{ tax.name }}({{ tax.rate }}%)</span>\n        <span class="pull-right text-sm">${{ tax.value }}</span>\n        <div class="clear"></div>\n      </div>\n    </ion-item>\n    <ion-item>\n      <h6 class="pull-left">TOTAL</h6>\n      <span class="pull-right">${{ order.total }}</span>\n    </ion-item>\n    <ion-item>\n      <span class="pull-left">Created at</span>\n      <span ion-text class="pull-right" color="secondary">{{ order.created_at | date: \'y/MM/d H:mm\'}}</span>\n    </ion-item>\n    <ion-item>\n      <h6>Ship to</h6>\n      <p>{{ order.address }}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/devanshuchandra/Desktop/Garlex/src/pages/order-detail/order-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], OrderDetailPage);

//# sourceMappingURL=order-detail.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 200;

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_order_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_cart_service__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var CheckoutPage = (function () {
    function CheckoutPage(nav, alertController, navParasm, orderService, cartService) {
        this.nav = nav;
        this.alertController = alertController;
        this.navParasm = navParasm;
        this.orderService = orderService;
        this.cartService = cartService;
        this.isEditing = false;
        this.cart = navParasm.get('cart');
    }
    // edit address
    CheckoutPage.prototype.editAddress = function () {
        var prompt = this.alertController.create({
            title: 'Address',
            message: "",
            inputs: [
                {
                    name: 'address',
                    value: ''
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    // place order button click
    CheckoutPage.prototype.buy = function () {
        var _this = this;
        // need to validate the address
        if (!this.address || (this.address.length < 10)) {
            // show alert
            var alert_1 = this.alertController.create({
                title: 'Info',
                subTitle: 'Please enter valid address',
                buttons: ['OK']
            });
            alert_1.present();
            return false;
        }
        this.orderService.addRecord(this.cart.items, this.address);
        // show alert
        var alert = this.alertController.create({
            title: 'Info',
            subTitle: 'Your order has been sent.',
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        // create cart
                        // this.cartService.clearCart();
                        // back to home page
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    // enable editing info
    CheckoutPage.prototype.enableEditing = function () {
        this.isEditing = true;
    };
    return CheckoutPage;
}());
CheckoutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-checkout',template:/*ion-inline-start:"/Users/devanshuchandra/Desktop/Garlex/src/pages/checkout/checkout.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Checkout</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class=" gray-bg">\n\n  <!--select payment method-->\n  <!--\n  <div margin>Payment</div>\n  <ion-list class="list-full-border card" margin radio-group>\n\n    <ion-item>\n      <ion-label>\n        Credit card\n        <p class="text-hint">\n          XXXX XXXX XXXX 4678\n        </p>\n      </ion-label>\n      <ion-radio></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        Cash on delivery\n        <p class="text-hint">\n          Free\n        </p>\n      </ion-label>\n      <ion-radio></ion-radio>\n    </ion-item>\n\n  </ion-list>\n  -->\n\n  <!--shipping address-->\n  <div margin>\n    <span>Shipping address</span>\n    <ion-icon name="md-create" class="pull-right" (click)="enableEditing()"></ion-icon>\n  </div>\n  <div class="card light-bg" margin-left margin-right padding>\n    <textarea [(ngModel)]="address" [disabled]="!isEditing" placeholder="Please enter shipping address" required></textarea>\n  </div>\n\n</ion-content>\n\n<!--Footer button-->\n<ion-footer class="cart-footer">\n  <ion-title>\n    <span ion-text color="dark">Total</span>\n    <br/>\n    <span class="bold" ion-text color="danger">${{ cart.total }}</span>\n  </ion-title>\n  <ion-buttons end>\n    <button ion-button (click)="buy()" color="danger">\n      PLACE ORDER\n    </button>\n  </ion-buttons>\n</ion-footer>\n'/*ion-inline-end:"/Users/devanshuchandra/Desktop/Garlex/src/pages/checkout/checkout.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__services_order_service__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_4__services_cart_service__["a" /* CartService */]])
], CheckoutPage);

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaxService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_service__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaxService = (function () {
    function TaxService(db, itemService) {
        this.db = db;
        this.itemService = itemService;
        this.taxes = db.list('/taxes');
    }
    TaxService.prototype.getAll = function () {
        return this.taxes;
    };
    // find record by id
    TaxService.prototype.getRecord = function (id) {
        return this.db.object('/taxes/' + id);
    };
    return TaxService;
}());
TaxService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__item_service__["a" /* ItemService */]])
], TaxService);

//# sourceMappingURL=tax-service.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var UserPage = (function () {
    function UserPage(nav, authService, toastCtrl) {
        this.nav = nav;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.user = {};
        this.user = authService.getUserData();
    }
    // save user info
    UserPage.prototype.submit = function () {
        this.authService.updateUserData(this.user);
        var toast = this.toastCtrl.create({
            message: 'User updated',
            duration: 2000,
            position: 'middle'
        });
        toast.present();
    };
    return UserPage;
}());
UserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"/Users/devanshuchandra/Desktop/Garlex/src/pages/user/user.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>User</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <!-- Cover and profile picture -->\n  <div class="profile-cover">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4 text-center>\n          <img class="profile-picture circle" src="{{ user.photoUrl }}">\n        </ion-col>\n        <ion-col width-66>\n          <h4 padding no-margin ion-text color="light">{{ user.displayName }}</h4>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- User information -->\n  <ion-list class="list-full-border">\n\n    <ion-item>\n      <ion-label stacked color="primary">Name</ion-label>\n      <ion-input type="text" [(ngModel)]="user.displayName"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked color="primary">Phone</ion-label>\n      <ion-input type="text" [(ngModel)]="user.phoneNumber"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked color="primary">Email</ion-label>\n      <ion-input type="text" [(ngModel)]="user.email" disabled></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked color="primary">Password</ion-label>\n      <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n\n<!--bottom buttons-->\n<ion-footer>\n  <ion-grid no-padding>\n    <ion-row class="item-button-group" no-padding>\n      <ion-col no-padding>\n        <button ion-button block color="gray">\n          Cancel\n        </button>\n      </ion-col>\n      <ion-col no-padding>\n        <button ion-button block (click)="submit()">\n          Save\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/Users/devanshuchandra/Desktop/Garlex/src/pages/user/user.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
], UserPage);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var SettingPage = (function () {
    function SettingPage(nav, authService) {
        this.nav = nav;
        this.authService = authService;
        this.user = {};
        this.user = authService.getUserData();
    }
    return SettingPage;
}());
SettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-setting',template:/*ion-inline-start:"/Users/devanshuchandra/Desktop/Garlex/src/pages/setting/setting.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Setting</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <!-- Cover and profile picture -->\n  <div class="profile-cover">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4 text-center>\n          <img class="profile-picture circle" src="{{ user.photoURL }}">\n        </ion-col>\n        <ion-col width-66>\n          <h4 padding no-margin ion-text color="light">{{ user.displayName }}</h4>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- User settings -->\n  <ion-list class="list-full-border">\n\n    <ion-item>\n      <ion-label color="primary">Notification</ion-label>\n      <ion-toggle checked="false"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked color="primary">Credit card #No</ion-label>\n      <ion-input type="text" value="XXXX XXXX XXXX 4678"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked color="primary">Expires</ion-label>\n      <ion-input type="text" value="08/16"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked color="primary">CVV-Code</ion-label>\n      <ion-input type="text" value="3013"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked color="primary">Address</ion-label>\n      <ion-input type="text" value="St Luiz, Barcelona"></ion-input>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n\n<!--bottom buttons-->\n<ion-footer>\n  <ion-grid no-padding>\n    <ion-row class="item-button-group" no-padding>\n      <ion-col no-padding>\n        <button ion-button block color="gray">\n          Cancel\n        </button>\n      </ion-col>\n      <ion-col no-padding>\n        <button ion-button block>\n          Save\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/Users/devanshuchandra/Desktop/Garlex/src/pages/setting/setting.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
], SettingPage);

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var NewsPage = (function () {
    function NewsPage(nav, postService) {
        this.nav = nav;
        this.postService = postService;
        // set sample data
        this.posts = postService.getAll();
    }
    return NewsPage;
}());
NewsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-news',template:/*ion-inline-start:"/Users/devanshuchandra/Desktop/Garlex/src/pages/news/news.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>News</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <!--list of posts-->\n  <ion-list class="list-full-border">\n    <ion-item *ngFor="let post of posts" text-wrap>\n      <ion-thumbnail item-left>\n        <img src="{{ post.thumb }}" alt="">\n      </ion-thumbnail>\n      <div>\n        <div>{{ post.title }}</div>\n        <p class="text-sm" ion-text color="light-dark">{{ post.desc }}</p>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/devanshuchandra/Desktop/Garlex/src/pages/news/news.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]])
], NewsPage);

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_posts__ = __webpack_require__(432);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostService = (function () {
    function PostService() {
        this.posts = __WEBPACK_IMPORTED_MODULE_1__mock_posts__["a" /* POSTS */];
    }
    PostService.prototype.getAll = function () {
        return this.posts;
    };
    PostService.prototype.getItem = function (id) {
        for (var i = 0; i < this.posts.length; i++) {
            if (this.posts[i].id === parseInt(id)) {
                return this.posts[i];
            }
        }
        return null;
    };
    PostService.prototype.remove = function (item) {
        this.posts.splice(this.posts.indexOf(item), 1);
    };
    return PostService;
}());
PostService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PostService);

//# sourceMappingURL=post-service.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(nav) {
        this.nav = nav;
        // working days
        this.days = [
            {
                'name': 'Monday',
                'hours': '02:00pm - 10:00pm'
            },
            {
                'name': 'Tuesday',
                'hours': '02:00pm - 10:00pm'
            },
            {
                'name': 'Wednesday',
                'hours': '02:00pm - 10:00pm'
            },
            {
                'name': 'Thursday',
                'hours': '02:00pm - 10:00pm'
            },
            {
                'name': 'Friday',
                'hours': '02:00pm - 10:00pm'
            },
            {
                'name': 'Saturday',
                'hours': '05:00pm - 10:00pm'
            },
            {
                'name': 'Sunday',
                'hours': '05:00pm - 10:00pm'
            }
        ];
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/devanshuchandra/Desktop/Garlex/src/pages/about/about.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="about gray-bg">\n  <h2 ion-text color="dark">El Gaucho restaurant </h2>\n  <span ion-text color="dark">225 Valencia St, San Francisco, CA</span>\n\n  <h3>About us</h3>\n\n  <p ion-text color="dark">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n    industry\'s\n    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make\n    a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,\n    remaining essentially unchanged</p>\n\n  <h3>Open hours</h3>\n\n  <ion-list class="list-full-border">\n    <ion-item *ngFor="let day of days">\n      <div>{{ day.name }}</div>\n      <span light-dark>{{ day.hours }}</span>\n    </ion-item>\n  </ion-list>\n\n  <h3>Get in touch</h3>\n\n  <ion-list class="list-full-border">\n    <ion-item>\n      <ion-icon name="call" item-left></ion-icon>\n      Call us\n    </ion-item>\n    <ion-item>\n      <ion-icon name="mail" item-left></ion-icon>\n      Send us and Email\n    </ion-item>\n    <ion-item>\n      <ion-icon name="navigate" item-left></ion-icon>\n      Find us / Get directions\n    </ion-item>\n  </ion-list>\n\n  <h4>Get social with us</h4>\n  <ion-list class="list-full-border">\n    <ion-item>\n      <ion-icon name="logo-facebook" item-left></ion-icon>\n      Visit us on Facebook\n    </ion-item>\n    <ion-item>\n      <ion-icon name="logo-instagram" item-left></ion-icon>\n      Follow us on Instagram\n    </ion-item>\n    <ion-item>\n      <ion-icon name="logo-twitter" item-left></ion-icon>\n      Follow us on Twitter\n    </ion-item>\n    <ion-item>\n      <ion-icon name="logo-pinterest" item-left></ion-icon>\n      Follow us on Pinterest\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/devanshuchandra/Desktop/Garlex/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(nav, authService, alertCtrl, loadingCtrl) {
        this.nav = nav;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    // register and go to home page
    RegisterPage.prototype.register = function () {
        var _this = this;
        if (!this.email || !this.password) {
            var alert_1 = this.alertCtrl.create({
                message: 'Please provide email and password',
                buttons: ['OK']
            });
            return alert_1.present();
        }
        if (this.password != this.confirmPassword) {
            var alert_2 = this.alertCtrl.create({
                message: 'Confirm password does not match',
                buttons: ['OK']
            });
            alert_2.present();
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            this.authService.register(this.email, this.password).subscribe(function (authData) {
                loading_1.dismiss();
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            }, function (error) {
                loading_1.dismiss();
                var alert = _this.alertCtrl.create({
                    message: error.message,
                    buttons: ['OK']
                });
                alert.present();
            });
        }
    };
    // go to login page
    RegisterPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/devanshuchandra/Desktop/Garlex/src/pages/register/register.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content class="auth-bg">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding text-center>\n      <div class="logo primary-bg">\n        <ion-icon name="md-restaurant" color="light"></ion-icon>\n      </div>\n      <h2 ion-text color="light">\n        Ionic 2 Restaurant\n      </h2>\n    </div>\n\n    <!-- Login form -->\n    <ion-list class="list-form" padding>\n      \n      <ion-item>\n        <ion-label stacked>Email</ion-label>\n        <ion-input type="email" [(ngModel)]="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="password"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Confirm Password</ion-label>\n        <ion-input type="password" [(ngModel)]="confirmPassword"></ion-input>\n      </ion-item>\n\n    </ion-list>\n\n    <div margin-top>\n      <button ion-button block color="primary" (click)="register()">\n        SIGN UP\n      </button>\n    </div>\n\n    <!-- Other links -->\n    <div text-center margin-top>\n      <span ion-text color="light" (click)="login()">I have an account</span>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/devanshuchandra/Desktop/Garlex/src/pages/register/register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_detail_chat_detail__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var ChatsPage = (function () {
    function ChatsPage(nav, chatService) {
        this.nav = nav;
        this.chatService = chatService;
        // get sample data only
        this.chats = chatService.getAll();
    }
    ChatsPage.prototype.viewChat = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__chat_detail_chat_detail__["a" /* ChatDetailPage */], { id: id });
    };
    return ChatsPage;
}());
ChatsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chats',template:/*ion-inline-start:"/Users/devanshuchandra/Desktop/Garlex/src/pages/chats/chats.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Chats</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list class="list-full-border">\n    <ion-item-sliding *ngFor="let chat of chats">\n\n      <ion-item text-wrap (click)="viewChat(chat.id)">\n        <ion-avatar item-left>\n          <img class="profile-picture" src="{{ chat.face }}" alt=""/>\n        </ion-avatar>\n        <h2 ion-text color="primary">{{chat.name}}</h2>\n        <p>{{chat.lastText}}</p>\n      </ion-item>\n\n      <ion-item-options>\n        <button ion-button color="secondary">\n          Mute\n        </button>\n        <button ion-button color="danger">\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/devanshuchandra/Desktop/Garlex/src/pages/chats/chats.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */]])
], ChatsPage);

//# sourceMappingURL=chats.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_service__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var ChatDetailPage = (function () {
    function ChatDetailPage(nav, chatService) {
        this.nav = nav;
        this.chatService = chatService;
        // get sample data only
        //this.chat = chatService.getItem(navParams.get('id'));
        this.chat = chatService.getItem(0);
    }
    return ChatDetailPage;
}());
ChatDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chat-detail',template:/*ion-inline-start:"/Users/devanshuchandra/Desktop/Garlex/src/pages/chat-detail/chat-detail.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ChatDetail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div *ngFor="let message of chat.messages" class="message-wrapper rlt"\n       (hold)="onMessageHold($event, $index, message)">\n\n    <div *ngIf="message.type == \'received\'">\n\n      <img class="profile-picture left" src="{{ chat.face }}"/>\n\n      <div class="chat-bubble left">\n\n        <div class="message">\n          {{ message.text }}\n          <img src="{{ message.image }}" class="block" *ngIf="message.image" alt=""/>\n        </div>\n\n        <div class="message-detail">\n          <span class="message-time">{{ message.time }}</span>\n        </div>\n\n      </div>\n    </div>\n\n    <div *ngIf="message.type == \'sent\'">\n\n      <img class="profile-picture right" src="assets/img/adam.jpg"/>\n\n      <div class="chat-bubble right">\n\n        <div class="message" ng-bind-html="message.text">\n          {{ message.text }}\n        </div>\n\n        <div class="message-detail">\n          <span class="message-time">{{ message.time }}</span>\n        </div>\n\n      </div>\n\n    </div>\n    <div class="clear"></div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/devanshuchandra/Desktop/Garlex/src/pages/chat-detail/chat-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */]])
], ChatDetailPage);

//# sourceMappingURL=chat-detail.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationService = (function () {
    function NotificationService(db, authService) {
        this.db = db;
        this.authService = authService;
    }
    NotificationService.prototype.getAll = function () {
        var user = this.authService.getUserData();
        this.notifications = this.db.list('/notifications/' + user.uid);
        return this.notifications;
    };
    NotificationService.prototype.remove = function (item) {
        this.notifications.remove(item.$key);
    };
    return NotificationService;
}());
NotificationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
], NotificationService);

//# sourceMappingURL=notification-service.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_detail_order_detail__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var OrdersPage = (function () {
    function OrdersPage(nav, orderService) {
        this.nav = nav;
        this.orderService = orderService;
        // get list orders from firebase
        this.orders = orderService.getAll();
    }
    // view order detail
    OrdersPage.prototype.viewOrder = function (order) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__order_detail_order_detail__["a" /* OrderDetailPage */], { order: order });
    };
    return OrdersPage;
}());
OrdersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-orders',template:/*ion-inline-start:"/Users/devanshuchandra/Desktop/Garlex/src/pages/orders/orders.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Orders</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="light-bg" padding>\n  <div margin-bottom *ngFor="let order of orders | async" (click)="viewOrder(order)">\n    <div class="card white-bg">\n      <div class="padding-xs">\n        <ion-badge color="{{ order.status }}">{{ order.status }}</ion-badge>\n        <h4 ion-text color="dark">#{{ order.number }}</h4>\n        <div>\n          <span class="pull-left">Created at</span>\n          <span ion-text class="pull-right" color="secondary">{{ order.created_at | date: \'y/MM/d H:mm\'}}</span>\n        </div>\n      </div>\n      <div class="padding-xs">\n        <span class="pull-left">TOTAL</span>\n        <strong class="pull-right">${{ order.total }}</strong>\n        <div class="clear"></div>\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/devanshuchandra/Desktop/Garlex/src/pages/orders/orders.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */]])
], OrdersPage);

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(312);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_category_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_item_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_cart_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_post_service__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_chat_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_notification_service__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_tax_service__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_about_about__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_address_address__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_cart_cart__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_categories_categories__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_category_category__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_chat_detail_chat_detail__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_chats_chats__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_checkout_checkout__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_favorite_favorite__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_home_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_item_item__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_login_login__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_news_news__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_offer_offer__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_register_register__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_setting_setting__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_user_user__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_order_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_auth_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_orders_orders__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_order_detail_order_detail__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Import the AF2 Module



// import services







// end import services
// import pages





















// end import pages
// AF2 Settings
var firebaseConfig = {
    apiKey: "AIzaSyD8G9U7stg99CwD0y3EQjjJH5oVMz-z2uw",
    authDomain: "garlex-95dfa.firebaseapp.com",
    databaseURL: "https://garlex-95dfa.firebaseio.com",
    projectId: "garlex-95dfa",
    storageBucket: "garlex-95dfa.appspot.com",
    messagingSenderId: "951138828381"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_17__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_address_address__["a" /* AddressPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_categories_categories__["a" /* CategoriesPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_category_category__["a" /* CategoryPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_chat_detail_chat_detail__["a" /* ChatDetailPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_chats_chats__["a" /* ChatsPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_checkout_checkout__["a" /* CheckoutPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_favorite_favorite__["a" /* FavoritePage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_item_item__["a" /* ItemPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_news_news__["a" /* NewsPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_offer_offer__["a" /* OfferPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_setting_setting__["a" /* SettingPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_orders_orders__["a" /* OrdersPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_order_detail_order_detail__["a" /* OrderDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_17__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_address_address__["a" /* AddressPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_categories_categories__["a" /* CategoriesPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_category_category__["a" /* CategoryPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_chat_detail_chat_detail__["a" /* ChatDetailPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_chats_chats__["a" /* ChatsPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_checkout_checkout__["a" /* CheckoutPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_favorite_favorite__["a" /* FavoritePage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_item_item__["a" /* ItemPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_news_news__["a" /* NewsPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_offer_offer__["a" /* OfferPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_setting_setting__["a" /* SettingPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_orders_orders__["a" /* OrdersPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_order_detail_order_detail__["a" /* OrderDetailPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_10__services_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_11__services_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_12__services_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_13__services_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_14__services_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_34__services_order_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_35__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_15__services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_16__services_tax_service__["a" /* TaxService */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = (function () {
    function AuthService(afAuth, db, storage) {
        this.afAuth = afAuth;
        this.db = db;
        this.storage = storage;
        this.defaultAvatar = 'https://freeiconshop.com/wp-content/uploads/edd/person-outline-filled.png';
    }
    // get current user data from firebase
    AuthService.prototype.getUserData = function () {
        return this.afAuth.auth.currentUser;
    };
    // update user data
    AuthService.prototype.updateUserData = function (user) {
        var object = this.db.object('users/' + user.uid);
        object.update({
            displayName: user.displayName,
            photoURL: user.photoURL
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (user) {
            // if user info is empty
            if (!user.displayName || !user.photoURL) {
                _this.updateUserProfile(user);
            }
        });
    };
    AuthService.prototype.loginWithFacebook = function () {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"].FacebookAuthProvider()).then(function (result) {
            _this.user = result.user;
        }).catch(function (error) {
            console.log(error);
        });
    };
    AuthService.prototype.loginWithGoogle = function () {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"].GoogleAuthProvider()).then(function (result) {
            _this.user = result.user;
        }).catch(function (error) {
            console.log(error);
        });
    };
    AuthService.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService.prototype.register = function (email, password) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].create(function (observer) {
            _this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function (authData) {
                _this.updateUserProfile(authData);
                observer.next();
            }).catch(function (error) {
                if (error) {
                    observer.error(error);
                }
            });
        });
    };
    // update user display name and photo
    AuthService.prototype.updateUserProfile = function (user) {
        this.getUserData().updateProfile({
            displayName: user.displayName ? user.displayName : user.email,
            photoURL: user.photoURL ? user.photoURL : this.defaultAvatar
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], AuthService);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cart_cart__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_user_user__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_setting_setting__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_news_news__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_chats_chats__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_order_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_notification_service__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_orders_orders__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_order_detail_order_detail__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth_auth__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import service

// import pages

// import {CategoriesPage} from '../pages/categories/categories';
// import {FavoritePage} from '../pages/favorite/favorite';

// import {OfferPage} from '../pages/offer/offer';











// end import pages
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, authService, notificationService, alertCtrl, orderService, afAuth) {
        var _this = this;
        this.authService = authService;
        this.notificationService = notificationService;
        this.alertCtrl = alertCtrl;
        this.orderService = orderService;
        this.afAuth = afAuth;
        this.user = {};
        this.pages = [
            {
                title: 'Home',
                icon: 'ios-home-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]
            },
            /*
             {
             title: 'Categories',
             icon: 'apps',
             count: 0,
             component: CategoriesPage
             },
        
             {
             title: 'Favorite',
             icon: 'star-outline',
             count: 0,
             component: FavoritePage
             },
             */
            {
                title: 'My Cart',
                icon: 'ios-cart-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_6__pages_cart_cart__["a" /* CartPage */]
            },
            {
                title: 'Orders',
                icon: 'ios-time-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_15__pages_orders_orders__["a" /* OrdersPage */]
            },
            /*
             {
             title: 'Offer',
             icon: 'ios-pricetag-outline',
             count: 0,
             component: OfferPage
             },
             */
            {
                title: 'Setting',
                icon: 'ios-settings-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_8__pages_setting_setting__["a" /* SettingPage */]
            },
            {
                title: 'News',
                icon: 'ios-paper-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_9__pages_news_news__["a" /* NewsPage */]
            },
            {
                title: 'About us',
                icon: 'ios-information-circle-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */]
            },
            {
                title: 'Supports',
                icon: 'ios-help-circle-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_12__pages_chats_chats__["a" /* ChatsPage */]
            },
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            // check for login stage, then redirect
            afAuth.authState.subscribe(function (authData) {
                if (authData) {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
                    _this.user = authService.getUserData();
                }
                else {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */]);
                }
            });
            // notification subscribe
            afAuth.authState.take(1).subscribe(function (authData) {
                if (authData) {
                    var isShowing_1 = false;
                    _this.notificationService.getAll().subscribe(function (records) {
                        if (records.length && !isShowing_1) {
                            // show the last notifications
                            var lastRecord_1 = records[records.length - 1];
                            if (lastRecord_1.object_type == 'order') {
                                var alert_1 = _this.alertCtrl.create({
                                    title: 'Order updated',
                                    subTitle: 'Your order has been updated',
                                    buttons: [
                                        {
                                            text: 'View',
                                            handler: function (data) {
                                                // find order object by id
                                                var subscription = _this.orderService.getRecord(lastRecord_1.order_id).subscribe(function (data) {
                                                    subscription.unsubscribe();
                                                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_16__pages_order_detail_order_detail__["a" /* OrderDetailPage */], { order: data });
                                                });
                                                // remove this notifications
                                                _this.notificationService.remove(lastRecord_1.$key);
                                                isShowing_1 = false;
                                            }
                                        },
                                        {
                                            text: 'Close',
                                            handler: function (data) {
                                                _this.notificationService.remove(lastRecord_1.$key);
                                                isShowing_1 = false;
                                            }
                                        }
                                    ]
                                });
                                isShowing_1 = true;
                                alert_1.present();
                            }
                        }
                    });
                }
            });
        });
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    // view my profile
    MyApp.prototype.viewMyProfile = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_user_user__["a" /* UserPage */]);
    };
    // logout
    MyApp.prototype.logout = function () {
        var _this = this;
        this.authService.logout().then(function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */]);
        });
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/devanshuchandra/Desktop/Garlex/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-content class="menu-left">\n    <!-- User profile -->\n    <div text-center padding-top padding-bottom class="primary-bg menu-left">\n      <a menuClose (click)="viewMyProfile()">\n        <img class="profile-picture" src="{{ user.photoURL }}">\n        <h4 ion-text color="light">{{ user.displayName }}</h4>\n      </a>\n    </div>\n\n    <ion-list class="list-full-border">\n      <button ion-item menuClose *ngFor="let page of pages" (click)="openPage(page)">\n        <ion-icon item-left name="{{ page.icon }}"></ion-icon>\n        {{ page.title }}\n        <ion-badge danger item-right *ngIf="page.count">{{ page.count }}</ion-badge>\n      </button>\n      <button ion-item menuClose (click)="logout()">\n        <ion-icon item-left name="ios-exit-outline"></ion-icon>\n        Logout\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/devanshuchandra/Desktop/Garlex/src/app/app.html"*/,
        queries: {
            nav: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */]('content')
        }
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_14__services_notification_service__["a" /* NotificationService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_13__services_order_service__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth_auth__["a" /* AngularFireAuth */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return POSTS; });
var POSTS = [
    {
        id: 1,
        title: 'Lorem Ipsum is simply',
        thumb: 'assets/img/items/thumbs/brick_chicken.jpg',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever si"
    },
    {
        id: 2,
        title: 'Lorem Ipsum is simply',
        thumb: 'assets/img/items/thumbs/fried_calamari.jpg',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever si"
    },
    {
        id: 3,
        title: 'Lorem Ipsum is simply',
        thumb: 'assets/img/items/thumbs/marsala_chicken.jpg',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever si"
    },
    {
        id: 4,
        title: 'Lorem Ipsum is simply',
        thumb: 'assets/img/items/thumbs/rib_eyes.jpg',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever si"
    },
    {
        id: 5,
        title: 'Lorem Ipsum is simply',
        thumb: 'assets/img/items/thumbs/seared_tuna.jpg',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever si"
    },
    {
        id: 6,
        title: 'Lorem Ipsum is simply',
        thumb: 'assets/img/items/thumbs/zuppa.jpg',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever si"
    },
    {
        id: 7,
        title: 'Lorem Ipsum is simply',
        thumb: 'assets/img/items/thumbs/brick_chicken.jpg',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever si"
    }
];
//# sourceMappingURL=mock-posts.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHATS; });
var CHATS = [
    {
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        face: 'assets/img/ben.png',
        messages: [
            {
                type: 'received',
                text: 'Hey, How are you? wanna hang out this friday?',
                image: '',
                time: 'Thursday 05:55 PM'
            },
            {
                type: 'sent',
                text: 'Good, Yes sure why not :D',
                image: '',
                time: 'Thursday 05:56 PM'
            },
            {
                type: 'received',
                text: 'Check out this view from my last trip',
                image: '',
                time: 'Thursday 05:57 PM'
            },
            {
                type: 'sent',
                text: 'Looks Great is that view in Canada?',
                image: '',
                time: 'Thursday 05:58 PM'
            },
            {
                type: 'received',
                text: 'Yes, it\'s in Canada',
                image: '',
                time: 'Thursday 05:57 PM'
            }
        ]
    },
    {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        face: 'assets/img/max.png'
    },
    {
        id: 2,
        name: 'Adam Bradleyson',
        lastText: 'I should buy a boat',
        face: 'assets/img/adam.jpg'
    },
    {
        d: 3,
        name: 'Perry Governor',
        lastText: 'Look at my mukluks!',
        face: 'assets/img/perry.png'
    },
    {
        id: 4,
        name: 'Mike Harrington',
        lastText: 'This is wicked good ice cream.',
        face: 'assets/img/mike.png'
    },
    {
        id: 5,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        face: 'assets/img/ben.png'
    },
    {
        id: 6,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        face: 'assets/img/max.png'
    }
];
//# sourceMappingURL=mock-chats.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var AddressPage = (function () {
    function AddressPage(nav) {
        this.nav = nav;
    }
    return AddressPage;
}());
AddressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-address',template:/*ion-inline-start:"/Users/devanshuchandra/Desktop/Garlex/src/pages/address/address.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Address</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="address">\n\n</ion-content>\n'/*ion-inline-end:"/Users/devanshuchandra/Desktop/Garlex/src/pages/address/address.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], AddressPage);

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_category_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_category__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var CategoriesPage = (function () {
    function CategoriesPage(nav, categoryService) {
        this.nav = nav;
        this.categoryService = categoryService;
        // set sample data
        this.categories = categoryService.getAll();
    }
    // view a category
    CategoriesPage.prototype.viewCategory = function (category) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__category_category__["a" /* CategoryPage */], { category: category });
    };
    return CategoriesPage;
}());
CategoriesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-categories',template:/*ion-inline-start:"/Users/devanshuchandra/Desktop/Garlex/src/pages/categories/categories.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Categories</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div class="list-items">\n    <div class="item-menu" *ngFor="let category of categories | async" (click)="viewCategory(category)">\n\n      <img src="{{ category.thumb }}" alt="{{ category.name }}"/>\n\n      <div class="overlay">\n\n          <span class="pull-left" ion-text color="light">\n            {{ category.name }}\n          </span>\n\n        <span class="pull-right" ion-text color="light">\n            {{ category.items.length }}\n          </span>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/devanshuchandra/Desktop/Garlex/src/pages/categories/categories.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_category_service__["a" /* CategoryService */]])
], CategoriesPage);

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_item__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var FavoritePage = (function () {
    function FavoritePage(nav, itemService) {
        this.nav = nav;
        this.itemService = itemService;
        // get all items
        this.items = itemService.getAll();
    }
    // view item detail
    FavoritePage.prototype.viewItem = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__item_item__["a" /* ItemPage */], { id: id });
    };
    // remove item from cart
    FavoritePage.prototype.remove = function (index) {
        this.items.splice(index, 1);
    };
    // add to cart
    FavoritePage.prototype.addCart = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
    };
    return FavoritePage;
}());
FavoritePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-favorite',template:/*ion-inline-start:"/Users/devanshuchandra/Desktop/Garlex/src/pages/favorite/favorite.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Favorite</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="favorite gray-bg">\n  <ion-list class="list-full-border">\n\n    <ion-item-sliding class="card" *ngFor="let item of items; let i = index" margin-bottom>\n      <ion-item>\n        <ion-thumbnail item-left>\n          <img src="{{ item.thumb }}" alt=""/>\n        </ion-thumbnail>\n        <h2>{{ item.name }}</h2>\n        <div>\n          <h2 class="price pull-left">\n            <span ion-text color="primary">${{ item.price }}</span>\n          </h2>\n          <button ion-button color="primary" class="button-cart pull-right" (click)="addCart(item)">\n            <ion-icon name="cart"></ion-icon>\n          </button>\n          <div class="clear"></div>\n        </div>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button (click)="remove(i)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/devanshuchandra/Desktop/Garlex/src/pages/favorite/favorite.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_item_service__["a" /* ItemService */]])
], FavoritePage);

//# sourceMappingURL=favorite.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_item__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var OfferPage = (function () {
    function OfferPage(nav, itemService) {
        this.nav = nav;
        this.itemService = itemService;
        // get all items
        this.items = itemService.getAll();
    }
    // view item detail
    OfferPage.prototype.viewItem = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__item_item__["a" /* ItemPage */], { id: id });
    };
    // add cart
    OfferPage.prototype.addCart = function () {
        // add your code here
    };
    return OfferPage;
}());
OfferPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-offer',template:/*ion-inline-start:"/Users/devanshuchandra/Desktop/Garlex/src/pages/offer/offer.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Offer</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class=" gray-bg">\n  <ion-slides pager>\n    <ion-slide *ngFor="let item of items">\n      <div class="card rlt light-bg" (click)="viewItem(item.id)">\n        <img class="full-image" src="{{ item.thumb }}" alt=""/>\n\n        <div class="card-bottom" padding>\n            <span class="pull-left">\n              {{ item.name }}\n            </span>\n\n          <span class="pull-right price" ion-text color="primary">\n              ${{ item.price }}\n            </span>\n\n          <div class="clear"></div>\n        </div>\n\n        <div class="offer-label">\n          <span class="square" text-center ion-text color="light">{{ item.offer }}%</span>\n          <i class="triangle"></i>\n        </div>\n      </div>\n\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n\n<!--Footer button-->\n<ion-footer class="offer-footer">\n  <ion-grid no-padding>\n    <ion-row class="item-button-group" no-padding>\n      <ion-col no-padding>\n        <button ion-button block color="gray">\n          <ion-icon class="text-2x" name="ios-star"></ion-icon>\n          <span class="text-sm">ADD TO FAVORITE</span>\n        </button>\n      </ion-col>\n      <ion-col no-padding>\n        <button ion-button block (click)="addCart()">\n          <ion-icon class="text-2x" name="ios-cart-outline"></ion-icon>\n          <span class="text-sm">ADD TO CART</span>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/Users/devanshuchandra/Desktop/Garlex/src/pages/offer/offer.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_item_service__["a" /* ItemService */]])
], OfferPage);

//# sourceMappingURL=offer.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemService = (function () {
    function ItemService(db) {
        this.db = db;
        this.items = db.list('/items');
    }
    // list all record
    ItemService.prototype.getAll = function () {
        return this.items;
    };
    // get all items by category
    ItemService.prototype.findByCategory = function (cat) {
        return this.db.list('/items', {
            query: {
                orderByChild: 'category_id',
                equalTo: cat.$key
            }
        });
    };
    return ItemService;
}());
ItemService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], ItemService);

//# sourceMappingURL=item-service.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_category__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_category_service__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(nav, categoryService) {
        this.nav = nav;
        this.categoryService = categoryService;
        // slides for slider
        this.slides = [
            "assets/img/categories/fruit.jpg",
            "assets/img/categories/pizza.jpg",
            "assets/img/categories/sushi.jpg"
        ];
        // set data for categories
        this.categories = categoryService.getAll();
    }
    // view a category
    HomePage.prototype.viewCategory = function (category) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__category_category__["a" /* CategoryPage */], { category: category });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/devanshuchandra/Desktop/Garlex/src/pages/home/home.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <!--slider-->\n  <ion-slides auto-play="2000" pager>\n    <ion-slide *ngFor="let img of slides">\n      <img class="full-image" src="{{ img }}" alt=""/>\n    </ion-slide>\n  </ion-slides>\n\n  <!--list of categories-->\n  <h3 text-center>El Gaucho restaurant</h3>\n\n  <div class="list-items">\n    <div class="item-menu" *ngFor="let category of categories | async" (click)="viewCategory(category)">\n\n      <img src="{{ category.thumb }}" alt="{{ category.name }}"/>\n\n      <div class="overlay">\n\n        <span class="pull-left" ion-text color="light">\n          {{ category.name }}\n        </span>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/devanshuchandra/Desktop/Garlex/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_category_service__["a" /* CategoryService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderService = (function () {
    function OrderService(db, authService) {
        this.db = db;
        this.authService = authService;
    }
    // get all records
    OrderService.prototype.getAll = function () {
        var user = this.authService.getUserData();
        this.orders = this.db.list('/orders/' + user.uid);
        return this.orders.map(function (arr) {
            return arr.reverse();
        });
    };
    // add record
    OrderService.prototype.addRecord = function (items, address) {
        var order = {
            address: address,
            items: []
        };
        items.forEach(function (item) {
            order.items.push({
                item_id: item.item_id,
                name: item.name,
                options: item.options,
                price: item.price,
                quantity: item.quantity,
                size: item.size,
                thumb: item.thumb,
            });
        });
        this.getAll();
        this.orders.push(order);
    };
    // find record by id
    OrderService.prototype.getRecord = function (id) {
        return this.db.object('/orders/' + this.userId + '/' + id);
    };
    return OrderService;
}());
OrderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]])
], OrderService);

//# sourceMappingURL=order-service.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryService = (function () {
    function CategoryService(db) {
        this.db = db;
        this.categories = db.list('/categories');
    }
    // list all record
    CategoryService.prototype.getAll = function () {
        return this.categories;
    };
    return CategoryService;
}());
CategoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], CategoryService);

//# sourceMappingURL=category-service.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_cart_service__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var ItemPage = (function () {
    function ItemPage(nav, itemService, alertController, navParams, cartService) {
        this.nav = nav;
        this.itemService = itemService;
        this.alertController = alertController;
        this.navParams = navParams;
        this.cartService = cartService;
        this.item = navParams.get('item');
    }
    // toggle favorite
    ItemPage.prototype.toggleFav = function (item) {
        item.faved = !item.faved;
    };
    // add item to cart
    ItemPage.prototype.addCart = function () {
        var _this = this;
        var prompt = this.alertController.create({
            title: 'Quantity',
            message: "",
            inputs: [
                {
                    name: 'quantity',
                    value: '1'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        // add item to cart
                        _this.cartService.addItem(_this.item, data.quantity, function (cart) {
                            // then alert to user
                            var alert = _this.alertController.create({
                                title: 'Info',
                                message: 'Item added to cart',
                                buttons: [
                                    {
                                        text: 'Cart',
                                        handler: function (data) {
                                            _this.nav.push(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
                                        }
                                    },
                                    {
                                        text: 'Close'
                                    }
                                ]
                            });
                            alert.present();
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    return ItemPage;
}());
ItemPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-item',template:/*ion-inline-start:"/Users/devanshuchandra/Desktop/Garlex/src/pages/item/item.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Item</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- Item cover -->\n  <div class="cover">\n    <ion-slides pager>\n      <ion-slide>\n        <img class="full-image" src="{{ item.thumb }}" alt=""/>\n      </ion-slide>\n      <ion-slide *ngFor="let img of item.images">\n        <img class="full-image" src="{{ img }}" alt=""/>\n      </ion-slide>\n    </ion-slides>\n\n    <div class="overlay">\n      <span class="pull-left" ion-text color="light">\n        {{ item.description }}\n      </span>\n\n      <span class="pull-right price" ion-text color="light">\n        ${{ item.price }}\n      </span>\n    </div>\n  </div>\n\n  <!-- Buttons -->\n  <ion-grid no-padding>\n    <ion-row class="item-button-group" no-padding>\n      <ion-col no-padding>\n        <button ion-button block (click)="toggleFav(item)" color="gray">\n          <ion-icon class="text-2x" name="ios-star" [hidden]="!item.faved"></ion-icon>\n          <ion-icon class="text-2x" name="ios-star-outline" [hidden]="item.faved"></ion-icon>\n          <span class="text-sm">ADD TO FAVORITE</span>\n        </button>\n      </ion-col>\n      <ion-col no-padding>\n        <button ion-button block (click)="addCart()">\n          <ion-icon class="text-2x" name="ios-cart-outline"></ion-icon>\n          <span class="text-sm">ADD TO CART</span>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list class="list-full-border" no-margin radio-group [(ngModel)]="item.size">\n    <ion-item-divider>Sizes</ion-item-divider>\n    <ion-item *ngFor="let size of item.sizes, let i = index">\n      <ion-label>{{ size.name }}: ${{ size.price }}</ion-label>\n      <ion-radio value="{{ i }}"></ion-radio>\n    </ion-item>\n  </ion-list>\n\n  <ion-list class="list-full-border" no-margin>\n    <ion-item-divider>Options</ion-item-divider>\n    <ion-item *ngFor="let option of item.options, let i = index">\n      <ion-label>{{ option.name }}</ion-label>\n      <ion-checkbox color="primary" [(ngModel)]="option.checked"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/devanshuchandra/Desktop/Garlex/src/pages/item/item.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_item_service__["a" /* ItemService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__services_cart_service__["a" /* CartService */]])
], ItemPage);

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cart_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_checkout__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_tax_service__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var CartPage = (function () {
    function CartPage(nav, cartService, storage, taxService) {
        var _this = this;
        this.nav = nav;
        this.cartService = cartService;
        this.storage = storage;
        this.taxService = taxService;
        // cart data
        this.cart = {
            items: [],
            total: 0
        };
        cartService.getAll().then(function (data) {
            console.log(data);
            if (data) {
                // clean tax_objects of items
                data.items.map(function (item) {
                    item.tax_objects = [];
                });
                // add tax object to each item
                var subscription_1 = taxService.getAll().subscribe(function (snapshot) {
                    subscription_1.unsubscribe();
                    snapshot.forEach(function (tax) {
                        // if this tax is enabled
                        if (tax.enable) {
                            for (var i = 0; i < data.items.length; i++) {
                                // if this item is applied for this taxes
                                if (tax.apply_items && (tax.apply_items.indexOf(data.items[i].item_id) > -1)) {
                                    if (data.items[i].tax_objects) {
                                        data.items[i].tax_objects.push(tax);
                                    }
                                }
                            }
                        }
                    });
                    data.total = cartService.calculateTotalPrice(data.items);
                    _this.cart = data;
                });
            }
        });
    }
    // plus quantity
    CartPage.prototype.plusQty = function (item) {
        item.quantity++;
        this.cartService.changeQty(this.cart);
    };
    // minus quantity
    CartPage.prototype.minusQty = function (item) {
        if (item.quantity > 1) {
            item.quantity--;
        }
        this.cartService.changeQty(this.cart);
    };
    // remove item from cart
    CartPage.prototype.remove = function (index) {
        this.cartService.removeItem(this.cart, index);
    };
    // click buy button
    CartPage.prototype.buy = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__checkout_checkout__["a" /* CheckoutPage */], { cart: this.cart });
    };
    return CartPage;
}());
CartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cart',template:/*ion-inline-start:"/Users/devanshuchandra/Desktop/Garlex/src/pages/cart/cart.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cart</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="cart gray-bg">\n  <ion-list class="list-no-border">\n\n    <ion-item-sliding class="card" *ngFor="let item of cart.items; let i = index" margin-top>\n      <ion-item>\n        <ion-thumbnail item-left>\n          <img src="{{ item.thumb }}" alt=""/>\n        </ion-thumbnail>\n        <h2>{{ item.name }}</h2>\n        <div>\n          <h2 class="price pull-left">\n            <span ion-text color="primary">${{ item.subtotal }}</span>\n            <span>x {{ item.quantity }}</span>\n          </h2>\n          <button ion-button color="primary" class="button-qty pull-right" (click)="plusQty(item)">\n            <ion-icon name="add"></ion-icon>\n          </button>\n          <button ion-button color="primary" class="button-qty pull-right" (click)="minusQty(item)">\n            <ion-icon name="remove"></ion-icon>\n          </button>\n          <div class="clear"></div>\n        </div>\n        <!--tax info-->\n        <div>\n          <span class="text-sm" *ngFor="let tax of item.tax_objects">\n            +{{ tax.rate }}%{{ tax.name }}\n          </span>\n        </div>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button (click)="remove(i)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n</ion-content>\n\n<!--Footer button-->\n<ion-footer class="cart-footer">\n  <ion-title>\n    <span ion-text color="dark">Total</span>\n    <br/>\n    <span class="bold" ion-text color="danger">${{ cart.total }}</span>\n  </ion-title>\n  <ion-buttons end>\n    <button ion-button (click)="buy()" color="danger">\n      BUY ALL\n    </button>\n  </ion-buttons>\n</ion-footer>\n'/*ion-inline-end:"/Users/devanshuchandra/Desktop/Garlex/src/pages/cart/cart.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__services_tax_service__["a" /* TaxService */]])
], CartPage);

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartService = (function () {
    function CartService(storage) {
        this.storage = storage;
        this.cart = {
            items: [],
            total: 0
        };
    }
    // get all items from cart
    CartService.prototype.getAll = function () {
        return this.storage.get('cart');
    };
    // add item to card
    CartService.prototype.addItem = function (item, qty, callback) {
        var _this = this;
        var storage = this.storage;
        // return 0;
        storage.get('cart').then(function (cart) {
            if (!cart) {
                cart = _this.cart;
            }
            // calculate item
            var record = {
                item_id: item.$key,
                name: item.name,
                thumb: item.thumb,
                price: item.price,
                options: [],
                taxes: item.taxes ? item.taxes : {},
                size: item.size ? item.sizes[item.size] : null,
                quantity: parseInt(qty),
                subtotal: 0
            };
            record.subtotal = parseFloat(record.size ? record.size.price : record.price);
            if (item.options) {
                for (var i = 0; i < item.options.length; i++) {
                    if (item.options[i].checked) {
                        record.options.push(item.options[i]);
                        record.subtotal += parseFloat(record.options[i].price);
                    }
                }
            }
            // calculate cart total
            // cart.total += record.subtotal * qty;
            // if item with the size and options already exist => change the qty only
            var itemIndex = -1;
            for (var i = 0; i < cart.items.length; i++) {
                var item_1 = cart.items[i];
                if ((item_1.item_id == record.item_id) &&
                    (item_1.size == record.size) &&
                    (JSON.stringify(item_1.options) == JSON.stringify(record.options))) {
                    itemIndex = i;
                }
            }
            if (itemIndex == -1) {
                cart.items.push(record);
            }
            else {
                cart.items[itemIndex].quantity += record.quantity;
                cart.items[itemIndex].subtotal += record.subtotal;
            }
            // update cart total price
            cart.total = _this.calculateTotalPrice(cart.items);
            storage.set('cart', cart).then(callback(cart));
        });
    };
    // remote item from cart
    CartService.prototype.removeItem = function (cart, index) {
        // remote from array
        cart.items.splice(index, 1);
        // calculate price
        cart.total = this.calculateTotalPrice(cart.items);
        // save to storage
        this.storage.set('cart', cart);
    };
    // change item qty
    CartService.prototype.changeQty = function (cart) {
        // save to storage
        cart.total = this.calculateTotalPrice(cart.items);
        this.storage.set('cart', cart);
    };
    // calculate total price
    CartService.prototype.calculateTotalPrice = function (items) {
        var total = 0;
        var subtotal = 0;
        // calculate price
        items.forEach(function (item) {
            subtotal = item.subtotal * item.quantity;
            total += subtotal;
            if (item.tax_objects) {
                item.tax_objects.forEach(function (tax) {
                    total += subtotal * tax.rate / 100;
                });
            }
        });
        return total.toFixed(2);
    };
    // clear cart
    CartService.prototype.clearCart = function () {
        return this.storage.set('cart', this.cart);
    };
    return CartService;
}());
CartService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], CartService);

//# sourceMappingURL=cart-service.js.map

/***/ })

},[295]);
//# sourceMappingURL=main.js.map