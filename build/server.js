"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_controller_1 = require("./controllers/api.controller");
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = __importDefault(require("body-parser"));
var db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () { return console.log('connected'); });
mongoose_1.default.connect('mongodb+srv://admin:4R!gsojq3HrB@cluster0-jbvco.mongodb.net/test').catch();
var app = express_1.default();
var port = 3000;
app.use(body_parser_1.default.json());
app.use('/api', api_controller_1.ApiController);
app.listen(port, function () {
    console.log("listening a lot");
});
