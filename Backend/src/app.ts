import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import user_router from './routes/watch_routes';

//generamos la app

const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//parametros
app.set('PORT', process.env.PORT || 8080);


//routes
app.use('/api',user_router);

export default app;

