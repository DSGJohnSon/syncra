"use client";

import { Button } from "@/components/ui/button";
import { useCurrent } from "@/features/auth/api/use-current";
import { useLogout } from "@/features/auth/api/use-logout";

import { LuLogOut } from "react-icons/lu";

export default function UserButton() {
  const { data, isLoading } = useCurrent();
  const { mutate } = useLogout();

  return (
    <>
      <div className="p-4 rounded-md border">
        {isLoading ? <p>Loading...</p> : <p>Welcome, {data?.email}</p>}
      </div>
      <Button onClick={() => mutate()}>
        <LuLogOut />
        Logout
      </Button>
    </>
  );
}
