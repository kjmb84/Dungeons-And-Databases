import * as mongoose from "mongoose";
import Character from '../express/character';

var characterSchema = new mongoose.Schema({
    age: Number,
    currency: Number,
    currentHP: Number,
    deathSaves: {successes: Number, failures: Number},
    experience: Number,
    height: Number,
    HP: Number,
    name: String,
    speed: Number,
    temporaryHP: Number,
    vision: Number,
    weight: Number
})

interface CharacterModel extends Character, mongoose.Document { }

var User = mongoose.model<CharacterModel>("Character", characterSchema);

export = Character;