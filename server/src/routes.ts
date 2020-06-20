import { Router } from 'express';
import multer from 'multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ConsoleController from './app/controllers/ConsoleController';
import GameController from './app/controllers/GameController';

import authMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';

const routes = Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.get('/consoles', ConsoleController.index);

routes.get('/games/:id', GameController.show);
routes.get('/games', GameController.index);

// The routes below this middleware need authentication to be accessed
routes.use(authMiddleware);

routes.post('/games', upload.single('image'), GameController.store);
routes.put('/games/:id', GameController.update);

routes.delete('/users', UserController.destroy);
routes.put('/users', UserController.update);

export default routes;
