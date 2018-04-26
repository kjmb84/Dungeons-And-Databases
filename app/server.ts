import { ApiController } from './controllers/api.controller';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import env from '../env';
import NestedStructures from './nestedStructures';

// const mongoURL = `${env.MongoScheme}//${env.MongoUser}:${env.MongoPassword}@${env.MongoServer}/${env.MongoDatabase}`;
const mongoURL = 'mongodb://localhost:27017/test';
console.log(mongoURL);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('connected');
    const nestedStructures: NestedStructures = new NestedStructures();
});
mongoose.connect(mongoURL).catch(e => console.log(e));
 
const app: express.Application = express();

app.use(bodyParser.json());
app.use('/api', ApiController);

app.listen(env.Port, () => {
    console.log("listening"); 
});