// import mongoose from "mongoose";
import mongoose = require('mongoose');
import ICharacter from '../express/ICharacter';

interface Character extends ICharacter, mongoose.Document { }
// type CharacterType = ICharacter & mongoose.Document;

let characterSchema = new mongoose.Schema({
// const Character = mongoose.model<CharacterType>('Character', new mongoose.Schema({
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
});


let Character = mongoose.model<Character>("Character", characterSchema);

export = Character;