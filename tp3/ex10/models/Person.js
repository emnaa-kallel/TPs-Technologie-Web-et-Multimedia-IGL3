"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(id, name, role) {
        this.id = id;
        this.name = name;
        this.role = role;
    }
    Person.prototype.isAdmin = function () {
        return this.role === 'Admin';
    };
    return Person;
}());
exports.Person = Person;
