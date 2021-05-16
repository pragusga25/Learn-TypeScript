import express from 'express';
import { router } from './routes/loginRoutes';

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(6789, () => console.log('Server is running on port 6789'));
