import mongoose = require('mongoose');
import IFeat from '../express/IFeat';


interface Feat extends IFeat, mongoose.Document { }
let FeatSchema = new mongoose.Schema({
    name: String,
    description: String,
    perks: [String],
    modifiers: [{
        name: String,
        modifier: Number
    }]
});


let FeatModel = mongoose.model<Feat>('Feat', FeatSchema);


let Feat = {model: FeatModel, schema: FeatSchema};

export = Feat;