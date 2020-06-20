import { Router } from 'express';
import multer from 'multer';

import UserController from '@controllers/UserController';
import SessionController from '@controllers/SessionController';
import ConsoleController from '@controllers/ConsoleController';
import GameController from '@controllers/GameController';

import authMiddleware from './app/middlewares/auth';
import multerConfig from '@configs/multer';

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
routes.put('/games/:id', upload.single('image'), GameController.update);
routes.delete('/games/:id', GameController.destroy);

routes.delete('/users', UserController.destroy);
routes.put('/users', UserController.update);

export default routes;
