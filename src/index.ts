import 'reflect-metadata';

import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';
import './database/connect';

dotenv.config();

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log(`>>> Server: OK`));
