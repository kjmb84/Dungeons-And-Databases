import mongoose from "mongoose";
import ICharacter from '../express/ICharacter';

interface ICharacterModel extends ICharacter, mongoose.Document { }

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


var Character = mongoose.model<ICharacterModel>("Character", characterSchema);

export = Character;