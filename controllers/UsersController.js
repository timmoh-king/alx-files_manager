import dbClient from '../utils/db';
import sha1 from 'sha1';

export default class UsersController {
  static async postNew (req, res) {
    const email = req.body ? req.body.email : null;
    const password = req.body ? req.body.password : null;

    if (!email) {
      res.status(400).json({ error: 'Missing email' });
    }

    if (!password) {
      res.status(400).json({ error: 'Missing password' });
    }

    const user = await (await dbClient.usersCollection()).findOne({ email });

    if (user) {
      res.status(400).json({ error: 'user already exists' });
      return;
    }
    const insertUser = await (await dbClient.usersCollection())
      .insertOne({ email, password: sha1(password) });
    const userId = insertUser.insertId.toString();

    res.status(201).json({ email, id: userId });
  }
}
