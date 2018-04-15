"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.get('/:anything', function (req, res) {
    var anything = req.params.anything;
    res.send("" + anything);
});
exports.TestController = router;
