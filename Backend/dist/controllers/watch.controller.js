"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.show = exports.add = void 0;
var Watch_1 = __importDefault(require("../models/Watch"));
//Se intenta hacer un CRUD de Relojes
//Create
function add(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, brand, color, material, usr_compare, new_watch;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, brand = _a.brand, color = _a.color, material = _a.material;
                    console.log("new user creation petition for user ", brand);
                    console.log("searching...");
                    return [4 /*yield*/, Watch_1.default.findOne({ 'brand': brand })];
                case 1:
                    usr_compare = _b.sent();
                    if (!!usr_compare) return [3 /*break*/, 3];
                    new_watch = new Watch_1.default({
                        brand: brand,
                        color: color,
                        material: material
                    });
                    return [4 /*yield*/, new_watch.save()];
                case 2:
                    _b.sent();
                    res.status(201);
                    return [2 /*return*/, res.json(new_watch.toJSON())];
                case 3: return [2 /*return*/, res.status(400)];
            }
        });
    });
}
exports.add = add;
//Read
function show(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var watches;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Watch_1.default.find()];
                case 1:
                    watches = _a.sent();
                    watches.forEach(function (watch) { return watch.populate('brand').populate('color').populate('material'); });
                    console.log("watches returned");
                    res.status(201).json(watches);
                    return [2 /*return*/];
            }
        });
    });
}
exports.show = show;
//Update
function update(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, brand, color, material, watch_compare, updatedWatch;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, brand = _a.brand, color = _a.color, material = _a.material;
                    console.log("Se quiere modificar a ", brand);
                    return [4 /*yield*/, Watch_1.default.findOne({ 'brand': brand })];
                case 1:
                    watch_compare = _b.sent();
                    console.log(watch_compare);
                    //Cuando encontramos ese reloj lo actualizamos
                    return [4 /*yield*/, Watch_1.default.findOneAndUpdate({ brand: brand }, {
                            brand: brand,
                            color: color,
                            material: material
                        }, { new: true })];
                case 2:
                    //Cuando encontramos ese reloj lo actualizamos
                    _b.sent();
                    updatedWatch = new Watch_1.default({
                        brand: brand,
                        color: color,
                        material: material
                    });
                    res.status(201);
                    return [2 /*return*/, res.json(updatedWatch.toJSON())];
            }
        });
    });
}
exports.update = update;
//Delete
function remove(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var brand, check;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    brand = req.body.brand;
                    return [4 /*yield*/, Watch_1.default.findOne({ 'brand': brand })];
                case 1:
                    check = _a.sent();
                    if (!!check) return [3 /*break*/, 2];
                    return [2 /*return*/, res.status(404).json({
                            message: 'this watch is not in the database',
                        })];
                case 2: return [4 /*yield*/, Watch_1.default.deleteOne({ 'brand': brand })];
                case 3:
                    _a.sent();
                    return [2 /*return*/, res.status(201).json(check.toJSON())];
            }
        });
    });
}
exports.remove = remove;
