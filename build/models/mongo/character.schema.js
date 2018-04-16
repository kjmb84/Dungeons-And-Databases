"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __importStar(require("mongoose"));
var characterSchema = new mongoose.Schema({
    age: Number,
    currency: Number,
    currentHP: Number,
    deathSaves: { successes: Number, failures: Number },
    experience: Number,
    height: Number,
    HP: Number,
    name: String,
    speed: Number,
    temporaryHP: Number,
    vision: Number,
    weight: Number
});
