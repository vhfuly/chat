import { Request, Response } from 'express';
import { MessagesService } from '../services/MessagesService';

class MessagesController {
  async create( request: Request, response: Response): Promise<Response>{
    const { user_id, admin_id, text } = request.body;

    const messagesService = new MessagesService();
  
    const message =  await messagesService.create({
      user_id,
      admin_id,
      text
    });

    return response.json(message);
  }
}

export { MessagesController };