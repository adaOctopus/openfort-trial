import { Request, Response } from 'express';

export const helloController = {
  getHello: (req: Request, res: Response) => {
    res.json({ message: 'hello' });
  }
};

