import { z } from "zod";

export const trackCoursSchema = z.object({
    type: z.enum(["etf", "actions", "crypto"]),
    symbol: z.string(),
});
