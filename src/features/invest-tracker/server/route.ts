import { Hono } from "hono";

const app = new Hono()
  // .basePath("/invest-tracker")
  .get("/get-international-symbol", async (c) => {
    const isin = "FR0013412285";
    const apiKey = process.env.NEXT_OPENFIGI_API_KEY!;

    const response = await fetch("https://api.openfigi.com/v2/mapping", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-OPENFIGI-APIKEY": apiKey,
      },
      body: JSON.stringify([{ idType: "ID_ISIN", idValue: isin }]),
    });

    if (!response.ok) {
      return c.json({ error: response.statusText });
    }

    const data = await response.json();

    return c.json({ data: data });
  })
  .get("/get-stock-history-by-month", async (c) => {
    const query = "IBM";
  });

export default app;
