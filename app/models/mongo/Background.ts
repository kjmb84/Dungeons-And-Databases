import mongoose = require('mongoose');
import IBackground from '../express/IBackground';
import Language from '../mongo/Language';

interface Background extends IBackground, mongoose.Document { }
let BackgroundSchema = new mongoose.Schema({
    name: String,
    description: String,
    attributes: [{
        name: String,
        modifier: Number
    }],
    languages: [Language.schema]
});


let BackgroundModel = mongoose.model<Background>('Background', BackgroundSchema);


let Background = {model: BackgroundModel, schema: BackgroundSchema};


export = Background;