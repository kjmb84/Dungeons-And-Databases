// import mongoose from "mongoose";
import mongoose = require('mongoose');
import ICharacter from '../express/ICharacter';
import Alignment from '../mongo/Alignment';

interface Character extends ICharacter, mongoose.Document { }

let characterSchema = new mongoose.Schema({
    age: Number,
    alignment: Alignment.schema,
    currency: Number,
    currentHP: Number,
    deathSaves: {successes: Number, failures: Number},
    experience: Number,
    height: Number,
    HP: Number,
    name: String,
    personalityTraits: [String],
    speed: Number,
    temporaryHP: Number,
    vision: Number,
    weight: Number
});

let Character = mongoose.model<Character>("Character", characterSchema);

export = Character;