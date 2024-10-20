import { User } from "@/core/model/User";
import { PrismaClient } from "@prisma/client";

export default class UserRepository {
    private static db: PrismaClient = new PrismaClient()
    
    public static async create(user: User): Promise<User> {
        return await this.db.user.upsert({
            where: { id: user.id },
            update: user,
            create: user
        })
    }

    public static async findAll(): Promise<User[]> {
        return await this.db.user.findMany()
    }

    public static async findById(id: string): Promise<User | null> {
        return await this.db.user.findUnique({ where: { id } })
    }

    public static async delete(id: string): Promise<void> {
        await this.db.user.delete({ where: { id } })
    }
}