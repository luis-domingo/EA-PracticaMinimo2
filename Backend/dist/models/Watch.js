"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    brand: String,
    color: String,
    material: String
});
exports.default = mongoose_1.model('Watch', schema);
