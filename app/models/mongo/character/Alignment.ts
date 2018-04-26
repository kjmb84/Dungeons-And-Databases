import mongoose = require('mongoose');
import IAlignment from '../express/character/IAlignment';

interface Alignment extends IAlignment, mongoose.Document { }

let alignmentSchema = new mongoose.Schema({
    name: String,
    description: String
});

let alignmentModel = mongoose.model<Alignment>("Alignment", alignmentSchema);

let Alignment = {model: alignmentModel, schema: alignmentSchema};

export = Alignment;