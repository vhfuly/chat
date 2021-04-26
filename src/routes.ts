import { Router } from 'express';

import { SettingsController } from './Controllers/SettingsController';
import { UsersController } from './Controllers/UsersController';
import { MessagesController } from './Controllers/MessagesController';

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post('/settings', settingsController.create)
routes.post('/users', usersController.create)
routes.post('/messages', messagesController.create)
routes.get('/messages/:id', messagesController.showByUser)

export { routes }