import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const registerSchema = z.object({
  name: z.string().max(256),
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Your password must contain at least 8 caracters."),
});
