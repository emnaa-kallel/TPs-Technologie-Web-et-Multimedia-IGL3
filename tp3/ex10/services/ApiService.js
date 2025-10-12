"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
var ApiService = /** @class */ (function () {
    function ApiService() {
    }
    ApiService.fetchBooks = function () {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve([
                    { id: 1, title: '1984', author: 'George Orwell', year: 1949, available: true },
                    { id: 2, title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937, available: true },
                    { id: 3, title: 'Clean Code', author: 'Robert C. Martin', year: 2008, available: true }
                ]);
            }, 500);
        });
    };
    return ApiService;
}());
exports.ApiService = ApiService;
