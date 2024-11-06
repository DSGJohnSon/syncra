"use client";

import React from "react";
import { Card } from "./ui/card";

export default async function HistoryTesla({ data }: { data: any }) {
  return (
    <Card>
      {data &&
        data.map((e: any) => (
          <div key={e.date}>
            <p>{e.date}</p>
            <p>{e.close}</p>
          </div>
        ))}
    </Card>
  );
}
