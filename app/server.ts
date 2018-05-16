import { ApiController } from './controllers/api.controller';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import env from '../env';
import NestedStructures from './nestedStructures';
import * as cors from 'cors';
const cors2 = require('cors');

const API_URL = '*';

const options: cors.CorsOptions = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: API_URL,
    preflightContinue: false
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

app.use(cors2());
app.use(bodyParser.json());
app.use('/api', ApiController);

app.listen(env.Port, () => {
    console.log("listening"); 
});