import { User } from "../models/User";

export class UserRepository {
    async createUser (email: string, username: string, password: string) {
        return await User.create({
            id: 0,
            email,
            username,
            password
            });
    }

    async getAllUsers() {
        return await User.findAll();
    }
}
