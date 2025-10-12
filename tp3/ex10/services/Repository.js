"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
var Repository = /** @class */ (function () {
    function Repository() {
        this.items = [];
    }
    Repository.prototype.add = function (item) {
        this.items.push(item);
    };
    Repository.prototype.remove = function (predicate) {
        this.items = this.items.filter(function (i) { return !predicate(i); });
    };
    Repository.prototype.find = function (predicate) {
        return this.items.find(predicate);
    };
    Repository.prototype.getAll = function () {
        return this.items;
    };
    return Repository;
}());
exports.Repository = Repository;
