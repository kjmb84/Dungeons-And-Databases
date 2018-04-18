import { ApiController } from './controllers/api.controller';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import env from '../env';
import Character from './models/mongo/Character';

const mongoURL = `${env.MongoScheme}//${env.MongoUser}:${env.MongoPassword}@${env.MongoServer}/${env.MongoDatabase}`;
console.log(mongoURL);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('connected');
    let test = new Character({
	    "age": 3,
	    "currency": 5,
	    "currentHP": 6,
	    "deathSaves": {"successes": 1, "failures": 2},
	    "experience": 100,
	    "height": 120,
	    "HP": 10,
	    "name": "jerry",
	    "speed": 30,
	    "temporaryHP": 8,
	    "vision": 120,
	    "weight": 80
    });
    test.save(e => console.log(1,2,3,4,5,e));
});
mongoose.connect(mongoURL).catch(e => console.log(e));
 
const app: express.Application = express();
const port: number = 3000;

app.use(bodyParser.json());
app.use('/api', ApiController);

app.listen(port, () => {
    console.log("listening a lot"); 
});