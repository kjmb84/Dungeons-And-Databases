import mongoose = require('mongoose');
import IBackground from '../../express/character/IBackground';
import Language from './Language';

interface Background extends IBackground, mongoose.Document { }
let BackgroundSchema = new mongoose.Schema({
    attributes: [{
        modifier: Number,
        name: String,
        proficient: Boolean
    }],
    description: String,
    languages: [Language.schema],
    name: String,
    toolProficiences: [String]
});

let BackgroundModel = mongoose.model<Background>('Background', BackgroundSchema);

let Background = {model: BackgroundModel, schema: BackgroundSchema};

export = Background;