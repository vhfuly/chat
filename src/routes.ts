import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import { SettingsRepository } from './repositories/SettingsRepository';

const routes = Router();

routes.post('/settings', async (request, response) => {
  const { chat, username } = request.body;
  const settingRepository = getCustomRepository(SettingsRepository);

  const setting = settingRepository.create({
    chat,
    username
  });

  await settingRepository.save(setting)
  response.json(setting)
})

export { routes }