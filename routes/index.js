import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';

const SetRoutes = (app) => {
  app.get('/status', AppController.getStatus);
  app.get('/stats', AppController.getStats);

  app.post('/users', UsersController.postNew);
  app.get('/users/me', UsersController.getMe);

  app.get('/connect', AuthController.getConnect);
  app.get('/disconnect', AuthController.getDisconnect);
};

export default SetRoutes;
