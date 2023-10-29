import * as z from "zod";

export const SignUpValidation = z.object({
  name: z.string().min(2, { message: "Too Short" }),
  username: z.string().min(2, { message: "Too Short" }),
  email: z.string().email({ message: "Invalid Email" }),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters" }),
});
