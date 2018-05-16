import { ApiController } from './controllers/api.controller';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import env from '../env';
import NestedStructures from './nestedStructures';

const cors = require('cors');
const originsWhitelist = [
    'https://localhost:4200'
];

const corsOptions = {
    origin: (origin: string, callback) => {
        const isWhitelisted = originsWhitelist.some(a => a === origin);
        callback(null, isWhitelisted);
    }
}

// const mongoURL = `${env.MongoScheme}//${env.MongoUser}:${env.MongoPassword}@${env.MongoServer}/${env.MongoDatabase}`;
const mongoURL = 'mongodb://localhost:27017/test';
console.log(mongoURL);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('connected');
});
mongoose.connect(mongoURL).catch(e => console.log(e));
 
const app: express.Application = express();

app.configure(() => {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })
    app.use(bodyParser.json());
    app.use('/api', ApiController);
})

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// })
// app.use(bodyParser.json());
// app.use('/api', ApiController);

app.listen(env.Port, () => {
    console.log("listening"); 
});