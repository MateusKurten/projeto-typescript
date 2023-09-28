import { User } from "../models/user.entity";

export default class UserController {
  async getUsers(admin: boolean) {
    const users = await User.findAll({
      where: {
        admin: admin
      },
      attributes: ['id', 'name'],
      raw: true,
    });

    return {
      status: 200,
      result: users
    }
  }
}