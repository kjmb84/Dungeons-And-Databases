import mongoose = require('mongoose');
import Ability from './Ability';
import Alignment from './Alignment';
import Background from './Background';
import Feat from './Feat';
import ICharacter from '../../express/character/ICharacter';
import Skill from './Skill';
import Wallet from './Wallet';

interface Character extends ICharacter, mongoose.Document { }

let characterSchema = new mongoose.Schema({
    abilities: [Ability.schema],
    age: Number,
    alignment: Alignment.schema,
    background: Background.schema,
    deathSaves: {successes: Number, failures: Number},
    experience: Number,
    feats: [Feat.schema],
    height: Number,
    HP: {current: Number, max: Number, temporary: Number},
    name: String,
    personalityTraits: [String],
    skills: [Skill.schema],
    speed: Number,
    vision: Number,
    wallet: Wallet.schema,
    weight: Number
});

let Character = mongoose.model<Character>("Character", characterSchema);

export = Character;