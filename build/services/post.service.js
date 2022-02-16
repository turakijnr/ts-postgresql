"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
var PostService = /** @class */ (function () {
    function PostService() {
        this.index = function () {
            return "Index From Service";
        };
        this.create = function () {
            return "create From Service";
        };
        this.update = function () {
            return "update From Service";
        };
        this.delete = function () {
            return "Delete From Service";
        };
    }
    return PostService;
}());
exports.PostService = PostService;
