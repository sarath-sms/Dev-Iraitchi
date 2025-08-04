import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/routes';
import cookieParser from 'cookie-parser';
import { checkMobNo } from './controllers/userControllers';

const app = express();

// env config
dotenv.config();

const PORT = process.env.PORT || 4000;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URI || 'mongodb://localhost/irai')
                .then(() => console.log('📀📀📀 mongodb connected 📀📀📀'))
                .catch((err) => console.log('🤬🤬🤬🤬🤬 Mongo connection issue', err));

// body-parser
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyparser.json());

// cors
app.use(cors());

routes(app);

app.get('/', (req, res) => {
    res.send(`app runs at port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Iraitchi server is running at port ${PORT}`);
});