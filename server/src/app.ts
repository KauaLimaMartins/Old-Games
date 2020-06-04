import express from 'express';
import cors from 'cors';
import { resolve } from 'path';

import routes from './routes';

class App {
  public app: express.Application;

  public constructor() {
    this.app = express();

    this.middleware();
    this.router();
  }

  private middleware(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private router(): void {
    this.app.use(routes);
    this.app.use(
      '/uploads',
      express.static(resolve(__dirname, '..', 'uploads'))
    );
  }
}

export default new App().app;
