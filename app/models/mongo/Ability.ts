import mongoose = require('mongoose');
import IAbility from '../express/character-interfaces/IAbility';

interface Ability extends IAbility, mongoose.Document { }
let AbilitySchema = new mongoose.Schema({
    name: String,
    shortName: String,
    description: String,
    score: Number
});

let AbilityModel = mongoose.model<Ability>('Ability', AbilitySchema);

let Ability = {model: AbilityModel, schema: AbilitySchema};

export = Ability;