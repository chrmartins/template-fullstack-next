'use server'
import { User } from '@/core/model/User';
import Id from '@/core/utils/Id';
import UserRepository from '../../repositories/UserRepository';

export default async function userSave(user: Partial<User>) {
    const newUser = {
        //Falta as validações
        ...user,
        id: user.id ?? Id.new,
    }

    UserRepository.create(newUser as User) 
}