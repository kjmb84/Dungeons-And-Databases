import { ApiController } from './controllers/api.controller';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import env from '../env';

const mongoURL = `mongodb+srv://${env.MongoUser}:${env.MongoPassword}@${env.MongoServer}/${env.MongoDatabase}`;
console.log(mongoURL);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('connected'));
mongoose.connect(mongoURL).catch(e => console.log(e));
 
const app: express.Application = express();
const port: number = 3000;

app.use(bodyParser.json());
app.use('/api', ApiController);

app.listen(port, () => {
    console.log("listening a lot");
});