import mongoose = require('mongoose');
import ISkill from '../express/ISkill';


interface Skill extends ISkill, mongoose.Document { }
let SkillSchema = new mongoose.Schema({
    name: String,
    description: String,
    proficient: Boolean,
    modifier: Number
});


let SkillModel = mongoose.model<Skill>('Skill', SkillSchema);


let Skill = {model: SkillModel, schema: SkillSchema};


export = Skill;