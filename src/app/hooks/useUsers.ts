import Service from "@/backend/services/users";
import { User } from "@/core/model/User";
import { useEffect, useState } from "react";

export default function useUsers() {
    const [users, setUsers] = useState<User[]>([]);
    const [user, setUser] = useState<Partial<User> | null>(null);
    
    useEffect(() => {
        Service.users.userFindAll().then(setUsers);
    }, []);
    
    async function handleSave() {
        if (!user) return;
        await Service.users.userSave(user);
        const users = await Service.users.userFindAll();
        setUsers(users);
        setUser(null);
    }
    
    async function handleDelete() {
        if (!user || !user.id) return;
        await Service.users.userDelete(user.id);
        const users = await Service.users.userFindAll();
        setUsers(users);
        setUser(null);
    }
    
    return {
        users,
        user,
        setUser,
        handleSave,
        handleDelete,
        cancel: () => setUser(null),
        update: (user: Partial<User> | null) => setUser(user),
        
    };
}