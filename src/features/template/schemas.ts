import { z } from "zod";

export const templateSchema = z.object({
    name: z.string().trim().min(1, "Required"),
});