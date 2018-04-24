import mongoose = require('mongoose');
import ILanguage from '../express/ILanguage';


interface Language extends ILanguage, mongoose.Document { }
let LanguageSchema = new mongoose.Schema({
    name: String,
    description: String
});


let LanguageModel = mongoose.model<Language>('Language', LanguageSchema);


let Language = {model: LanguageModel, schema: LanguageSchema};


export = Language;