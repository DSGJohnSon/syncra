import { SignInCard } from "@/features/auth/components/sign-in-card";
import { SignUpCard } from "@/features/auth/components/sign-up-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syncra | Login",
  description: "",
};

export default function LoginPage() {
  return (
    <div className="bg-slate-50 flex h-screen items-center justify-center">
      <SignUpCard />
    </div>
  );
}
