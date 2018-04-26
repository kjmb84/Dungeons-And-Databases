import mongoose = require('mongoose');
import Ability from '../mongo/Ability';
import Alignment from '../mongo/Alignment';
import Background from '../mongo/Background';
import Feat from '../mongo/Feat';
import ICharacter from '../express/ICharacter';
import Skill from '../mongo/Skill';
import Wallet from '../mongo/Wallet';

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