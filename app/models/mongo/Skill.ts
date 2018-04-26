import mongoose = require('mongoose');
import ISkill from '../express/character-interfaces/ISkill';

interface Skill extends ISkill, mongoose.Document { }
let SkillSchema = new mongoose.Schema({
    ability: String,
    description: String,
    modifier: Number,
    name: String,
    proficient: Boolean
});

let SkillModel = mongoose.model<Skill>('Skill', SkillSchema);

let Skill = {model: SkillModel, schema: SkillSchema};

export = Skill;