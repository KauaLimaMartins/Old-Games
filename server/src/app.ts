import express from 'express';
import cors from 'cors';
import path from 'path';

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
    this.app.use(
      '/consoles',
      express.static(path.resolve(__dirname, '..', 'temp', 'consoles'))
    );
    this.app.use(
      '/uploads',
      express.static(path.resolve(__dirname, '..', 'temp', 'uploads'))
    );
    this.app.use(routes);
  }
}

export default new App().app;
