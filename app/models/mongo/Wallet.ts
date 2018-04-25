import mongoose = require('mongoose');
import IWallet from '../express/IWallet';


interface Wallet extends IWallet, mongoose.Document { }
let WalletSchema = new mongoose.Schema({
    copper: Number,
    silver: Number,
    gold: Number,
    platinum: Number
});


let WalletModel = mongoose.model<Wallet>('Wallet', WalletSchema);


let Wallet = {model: WalletModel, schema: WalletSchema};


export = Wallet;