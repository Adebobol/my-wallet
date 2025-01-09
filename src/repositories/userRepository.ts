import { prisma } from "../config/script";
import { createUser } from "../Types/types";
import bcrypt from "bcrypt";

export class userRepo {
  async createUser(data: createUser) {
    return await prisma.user.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: bcrypt.hashSync(data.password, 10),
        phoneNumber: data.phoneNumber,
      },
    });
  }
}
