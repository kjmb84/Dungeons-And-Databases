"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Character = require("../../models/mongo/Character");
var router = express_1.Router();
router.get('/:characterID', function (req, res) {
    var characterID = req.params.characterID;
    res.send("" + characterID);
});
router.post('/:characterID', function (req, res) {
    var characterID = req.params.characterID;
    var character = new Character(req.body.character);
    console.log(character);
    character.save();
    res.send(character);
});
exports.CharacterController = router;
