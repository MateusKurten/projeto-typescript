import { User } from "../models/user.entity";

export default class UserController {
  async getUsers() {
    const users = await User.findAll({
      attributes: ['id', 'name'],
      raw: true,
    });

    return {
      status: 200,
      result: users
    }
  }
}