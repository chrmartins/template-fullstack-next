'use server'
import UserRepository from "@/backend/repositories/UserRepository";

export default async function userDelete(id: string): Promise<void> {
    if (!id) {
        return;
    }

    const user = await UserRepository.findById(id);
    if (!user) {
        throw new Error('User not found');
    }

    await UserRepository.delete(id);
}