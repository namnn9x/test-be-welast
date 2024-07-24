import express, { Request, Response } from 'express';
import axios from 'axios';
import Routes from './routes'

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use('/api', Routes)