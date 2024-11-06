import HistoryTesla from "@/components/history-tesla";
import { Card } from "@/components/ui/card";
import UserButton from "@/components/user-button";
import { getCurrent } from "@/features/auth/action";
import { useHistoricalPriceByMonth } from "@/features/invest-tracker/api/use-historical-price-by-month";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getCurrent();
  if (!user) redirect("/login");

  const teslaHistory = await useHistoricalPriceByMonth();

  return (
    <div>
      <UserButton />
      <HistoryTesla data={teslaHistory} />
    </div>
  );
}
