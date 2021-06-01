"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var watch_controller_1 = require("../controllers/watch.controller");
var user_router = express_1.Router();
user_router.route('/watch/add') //API Endpoint for Registering a user
    .post(watch_controller_1.add); // CREATE the user JSON object
user_router.route('/watch/')
    .get(watch_controller_1.show);
user_router.route('/watch/update')
    .put(watch_controller_1.update);
user_router.route('/watch/delete')
    .delete(watch_controller_1.remove);
exports.default = user_router;
