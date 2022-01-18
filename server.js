import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes.js';
import dotenv from 'dotenv';
dotenv.config();
import './config/dbConfig.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use((req,res,next) => {
    next();
});

app.use(routes);


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
