import { User } from "@/core/model/User";

interface UserRowProps {
  user: User;
  onClick?: (user: User) => void;
}

export default function UserRow({ user, onClick }: UserRowProps) {
  return (
    <div
      className="flex p-4 bg-zinc-900 rounded-md cursor-pointer"
      onClick={() => onClick?.(user)}
    >
      <div className="mr-4 w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center text-xl font-bold text-white">
        {user.name.charAt(0).toUpperCase()}
      </div>
      <div className="flex flex-col">
        <span>{user.name}</span>
        <span className="text-sm text-zinc-400">{user.email}</span>
      </div>
    </div>
  );
}
