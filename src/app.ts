import dotenv from 'dotenv';
import express from 'express';
import bodyParserMiddleware from './middlewares/bodyparser.middleware';
import router from './routes/index';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParserMiddleware);

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
