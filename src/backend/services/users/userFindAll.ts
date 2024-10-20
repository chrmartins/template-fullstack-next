'use server'
import UserRepository from '@/backend/repositories/UserRepository';

export default async function userFindAll() {
    return UserRepository.findAll(); 
}