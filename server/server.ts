import bodyParser from 'body-parser';
import express from 'express';
import itemsRouter from './routes/items';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/items', itemsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
