import { ApiController } from './controllers/api.controller';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import env from '../env';
import NestedStructures from './nestedStructures';
const cors = require('cors');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => { console.log('connected'); });
mongoose.connect(env.mongoUrl).catch(e => console.log(e));
 
const app: express.Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', ApiController);

app.listen(env.Port, () => { console.log("listening"); });