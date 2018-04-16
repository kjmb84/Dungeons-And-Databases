"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.get('/:characterID', function (req, res) {
    var characterID = req.params.characterID;
    res.send("" + characterID);
});
router.post('/:characterID', function (req, res) {
    var characterID = req.params.characterID;
});
exports.CharacterController = router;
