import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { trackCoursSchema } from "../schema";
import * as cheerio from "cheerio";

const app = new Hono()
  // .basePath("/investTracker")
  .post("/trackCours", zValidator("json", trackCoursSchema), async (c) => {
    const { type, symbol } = await c.req.json();

    const data = await fetch(`https://www.boursorama.com/cours/${symbol}`);
    const html = await data.text();

    const $ = await cheerio.load(html);
    const cours = await $(".c-instrument.c-instrument--last").text();

    return c.json({ symbol: symbol, price: cours });
  });

export default app;
