"use client";

import React from "react";
import { Card } from "./ui/card";
import { useTrakcCours } from "@/features/investTracker/api/use-track-cours";
import { Button } from "./ui/button";
import { LuLoader } from "react-icons/lu";

export default function ButtonGetAppl() {
  const { mutate, isPending } = useTrakcCours();

  return (
    <Button
      variant={"outline"}
      onClick={() => {
        mutate({ type: "actions", symbol: "TSLA" });
      }}
      disabled={isPending}
    >
      {isPending ? (
        <>
          <LuLoader className="size-4 animate-spin" />
          <span>Loading...</span>
        </>
      ) : (
        "Get TSLA Price"
      )}
    </Button>
  );
}
