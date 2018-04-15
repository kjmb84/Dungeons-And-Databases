import { ApiController } from './controllers/api.controller';
import express from 'express';
import mongoose from 'mongoose';

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('connected'));

mongoose.connect('mongodb+srv://admin:4R!gsojq3HrB@cluster0-jbvco.mongodb.net/test').catch();

const app: express.Application = express();
const port: number = 3000;

app.use('/api', ApiController);

app.listen(port, () => {
    console.log("listening a lot");
});