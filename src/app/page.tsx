"use client";

import { Button } from "@/components/ui/button";
import { useCurrent } from "@/features/auth/api/use-current";
import { useLogout } from "@/features/auth/api/use-logout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { LuLogOut } from "react-icons/lu";

export default function Home() {
  const router = useRouter();
  const { data, isLoading } = useCurrent();
  const { mutate } = useLogout();

  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/login");
    }
  }, [data]);

  return (
    <div>
      <Button onClick={() => mutate()}>
        <LuLogOut />
        Logout
      </Button>
    </div>
  );
}
