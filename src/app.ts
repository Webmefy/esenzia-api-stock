import express from 'express';
import { config } from './config/config';
import jsonParserMiddleware from './middlewares/jsonparser.middleware';
import { requestLogger } from './middlewares/logger.middleware';
import router from './routes';

const app = express();
const PORT = config.PORT;

app.use(jsonParserMiddleware);
app.use(requestLogger);

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
