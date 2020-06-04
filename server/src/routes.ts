import { Router } from 'express';

import ConsoleController from './controllers/ConsoleController';
import GameController from './controllers/GameController';

const routes = Router();

routes.get('/consoles', ConsoleController.index);

routes.get('/games/:id', GameController.show);
routes.get('/games', GameController.index);
routes.post('/games', GameController.store);

export default routes;
