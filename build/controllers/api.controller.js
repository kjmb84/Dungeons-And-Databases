"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var character_controller_1 = require("./routes/character.controller");
var express_1 = require("express");
var router = express_1.Router();
router.use('/character', character_controller_1.CharacterController);
// router.use('/items', ItemController);
// router.use('/spells', SpellController);
exports.ApiController = router;
