import mongoose = require('mongoose');
import Ability from '../mongo/Ability';
import Alignment from '../mongo/Alignment';
import Feat from '../mongo/Feat';
import ICharacter from '../express/ICharacter';
import Skill from '../mongo/Skill';

interface Character extends ICharacter, mongoose.Document { }

let characterSchema = new mongoose.Schema({
    abilities: [Ability.schema],
    age: Number,
    alignment: Alignment.schema,
    currency: Number,
    currentHP: Number,
    deathSaves: {successes: Number, failures: Number},
    experience: Number,
    feats: [Feat.schema],
    height: Number,
    HP: Number,
    name: String,
    personalityTraits: [String],
    skills: [Skill.schema],
    speed: Number,
    temporaryHP: Number,
    vision: Number,
    weight: Number
});

let Character = mongoose.model<Character>("Character", characterSchema);

export = Character;