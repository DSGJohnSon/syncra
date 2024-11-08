import ButtonGetAppl from "@/components/button-get-appl";
import UserButton from "@/components/user-button";
import { getCurrent } from "@/features/auth/action";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getCurrent();
  if (!user) redirect("/login");

  return (
    <div>
      <UserButton />
      <ButtonGetAppl />
    </div>
  );
}
