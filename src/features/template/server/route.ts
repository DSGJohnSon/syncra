import { Hono } from "hono";

const app = new Hono()
// .basePath("/template")
    .post("/", (c) => {
        return c.json({ hello: "world" });
    });

export default app;