import express from 'express';
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['ploiol'] }));
app.use(router);

app.listen(6789, () => console.log('Server is running on port 6789'));
