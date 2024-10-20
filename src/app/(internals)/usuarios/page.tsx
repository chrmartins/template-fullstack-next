"use client";
import Page from "@/app/components/template/Page";
import Title from "@/app/components/template/Title";
import UserForm from "@/app/components/users/UserForm";
import UserList from "@/app/components/users/UserList";
import useUsers from "@/app/hooks/useUsers";
import { IconPlus, IconUser } from "@tabler/icons-react";

export default function User() {
  const { users, user, handleSave, handleDelete, update } =
    useUsers();

  return (
    <Page className="flex flex-col gap-4">
      <Title
        title="Usuários"
        subtitle="Gerencie os usuários do sistema"
        icon={IconUser}
      />

      {user ? (
        <UserForm
          user={user}
          onChange={update}
          saveUser={handleSave}
          cancelUser={() => update(null)}
          deleteUser={handleDelete}
        />
      ) : (
        <>
          <div className="flex justify-end pr-4">
            <button
              className="flex items-center bg-blue-500 text-white p-2 rounded-md gap-2"
              onClick={() => update({})}
            >
              <IconPlus />
              <span>Novo Usuário</span>
            </button>
          </div>
          <UserList onClick={update} users={users} />
        </>
      )}
    </Page>
  );
}
