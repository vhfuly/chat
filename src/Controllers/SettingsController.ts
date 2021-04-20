import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from '../repositories/SettingsRepository';


class SettingsController {
  async create( request: Request, response: Response){
    const { chat, username } = request.body;
    const settingRepository = getCustomRepository(SettingsRepository);
  
    const setting = settingRepository.create({
      chat,
      username
    });
  
    await settingRepository.save(setting)
    response.json(setting)
  }
}

export { SettingsController };
