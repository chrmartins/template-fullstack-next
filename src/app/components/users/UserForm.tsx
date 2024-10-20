"use client";

import { User } from "@/core/model/User";
import InputText from "../shared/InputText";

export interface UserFormProps {
  user: Partial<User>;
  onChange?: (user: Partial<User>) => void;
  saveUser?: () => void;
  cancelUser?: () => void;
  deleteUser?: () => void;
}

export default function UserForm({
  user,
  onChange,
  saveUser,
  cancelUser,
  deleteUser,
}: UserFormProps) {
  return (
    <div className="flex flex-col gap-4">
      <InputText
        label="Nome"
        value={user.name}
        onChange={(e) => {
          onChange?.({ ...user, name: e.target.value });
        }}
      />
      <InputText
        label="Email"
        type="email"
        value={user.email}
        onChange={(e) => {
          onChange?.({ ...user, email: e.target.value });
        }}
      />
      <InputText
        label="Senha"
        type="password"
        value={user.password}
        onChange={(e) => onChange?.({ ...user, password: e.target.value })}
      />
      <div className="flex justify-between">
        <div className="flex gap-5">
          <button
            className="bg-blue-500 text-white p-2 rounded-md"
            onClick={saveUser}
          >
            Salvar
          </button>
          <button
            className="bg-slate-500 text-white p-2 rounded-md"
            type="button"
            onClick={cancelUser}
          >
            Cancelar
          </button>
        </div>
        <button
          className="bg-red-600 text-white p-2 rounded-md"
          type="button"
          onClick={deleteUser}
        >
          Excluir
        </button>
      </div>
    </div>
  );
}
