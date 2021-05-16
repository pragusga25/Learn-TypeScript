import express, { Request, Response } from 'express';

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
  res.send(
    `
      <div>
        <h1>Hello World</h1>
      </div>
    `
  );
});

app.listen(6789, () => console.log('Server is running on port 6789'));
