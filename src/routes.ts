import { Request, Response } from 'express';
import createUser from './services/createUser';

//tipo de dados
//string, number, boolean, object, array
//interface (conjunto de dados criados)

export function helloWord(request: Request, response: Response) {
  const user = createUser({
    email: 'teste@teste.com',
    password: '1222',
    techs: [
      'ReactJs', 
      'React Native', 
      'NodeJS', 
      { title: 'Javascript', experience: 100 }
    ],
  });

  console.log(user);

  return response.json({ message: 'Hello Word' });
}