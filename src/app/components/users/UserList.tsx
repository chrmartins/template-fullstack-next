
import UserRow from "./UserRow";
import { User } from "@/core/model/User";

interface UserListProps {
    users: User[];
    onClick?: (user: User) => void;
}

export default function UserList({ onClick, users }: UserListProps) {
    return (
        <div className="flex flex-col gap-4 rounded-md p-4">
            {users.map((user) => (
                <UserRow key={user.id} user={user} onClick={onClick}/>
            ))}
        </div>
    )
}
