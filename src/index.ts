import express, { Request, Response } from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.get('/', async (req: Request, res: Response) => {
  try {
    const response = await axios.get('https://api.example.com/data');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
