import { Router, Request, Response } from 'express';

interface Item {
  id: string;
  name: string;
  price: number;
}

const itemsRouter = Router();
const items: Item[] = [
  {
    id: '323232',
    name: 'Bread',
    price: 23
  }
]; // Just a mock database for now

itemsRouter.post('/', (req: Request, res: Response) => {
  const item = req.body;
  items.push(item);
  res.status(201).send(item);
});

itemsRouter.get('/', (req: Request, res: Response) => {
  res.send(items);
});

itemsRouter.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const item = items.find((i) => i.id === id);
  if (item) {
    res.send(item);
  } else {
    res.status(404).send({ message: 'Item not found' });
  }
});

itemsRouter.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedItem = req.body;

  const index = items.findIndex((i) => i.id === id);
  if (index !== -1) {
    items[index] = updatedItem;
    res.send(updatedItem);
  } else {
    res.status(404).send({ message: 'Item not found' });
  }
});

itemsRouter.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const index = items.findIndex((i) => i.id === id);
  if (index !== -1) {
    items.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send({ message: 'Item not found' });
  }
});

export default itemsRouter;
