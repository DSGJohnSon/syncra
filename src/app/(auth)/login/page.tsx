import { getCurrent } from "@/features/auth/action";
import { SignInCard } from "@/features/auth/components/sign-in-card";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Syncra | Login",
  description: "",
};

export default async function LoginPage() {

  const user = await getCurrent();
  if (user) redirect("/");

  return (
    <div className="bg-slate-50 flex h-screen items-center justify-center">
      <SignInCard />
    </div>
  );
}
