import logger from '#config/logger.js';
import express, { urlencoded } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import cookiParser from 'cookie-parser';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookiParser());

app.use(
  morgan('combined', {
    stream: { write: message => logger.info(message.trim()) },
  })
);

app.get('/', (req, res) => {
  logger.info('Root endpoint accessed');
  res.status(200).send('Hello from Acquisitions api!');
});

export default app;
