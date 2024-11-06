import { Hono } from "hono";
import { handle } from "hono/vercel";
import auth from "@/features/auth/server/route";
import investTracker from "@/features/invest-tracker/server/route";
import template from "@/features/template/server/route";

const app = new Hono().basePath("/api");

const routes = app.route("/auth", auth).route("/invest-tracker", investTracker);

// app.get("/hello", (c) => {
//   return c.json({ hello: "world" });
// });

// app.get("/project/:projectId", (c) => {
//   //Récupérer un param dans la slug de mon api
//   const { projectId } = c.req.param();
//   return c.json({ project: "projectId" });
// });

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
