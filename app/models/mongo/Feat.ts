import mongoose = require('mongoose');
import IFeat from '../express/character-interfaces/IFeat';

interface Feat extends IFeat, mongoose.Document { }
let FeatSchema = new mongoose.Schema({
    name: String,
    description: String,
    perks: [String],
    attributes: [{
        name: String,
        modifier: Number,
        proficient: Boolean
    }]
});

let FeatModel = mongoose.model<Feat>('Feat', FeatSchema);

let Feat = {model: FeatModel, schema: FeatSchema};

export = Feat;