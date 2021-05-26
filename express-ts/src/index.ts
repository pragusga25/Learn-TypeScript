import express from 'express';
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';
import './controllers/LoginController';
import { router as controllerRouter } from './controllers/decorators/controller';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['ploiol'] }));
app.use(router);
app.use(controllerRouter);

app.listen(6789, () => console.log('Server is running on port 6789'));
