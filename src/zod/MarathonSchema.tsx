import { z } from "zod";

// Zod Schema
export const marathonSchema = z
  .object({
    fname: z
      .string()
      .min(3, { message: "First name must have at least 3 letters" }),
    lname: z.string().min(5, "Last name must have at least 5 letters"),
    plan: z.enum(["funrun", "mini", "half", "full"], {
      message: "Select a plan",
    }),
    gender: z.enum(["male", "female"], { message: "Select gender" }),
    agree: z.boolean().default(false),
    email: z.email(),
    havecoupon: z.boolean().default(false),
    couponcode: z.string().optional(),

    // password & confirmPassword
    password: z
      .string()
      .min(6, "Password must contain at least 6 characters")
      .max(12, "Password must not exceed 12 characters"),
      confirmPassword: z.string(),
  })
  .refine(
    (data) => {
      if (!data.havecoupon) return true;
      return data.couponcode?.trim() === "CMU2025";
    },
    {
      message: "Invalid coupon code",
      path: ["couponCode"],
    }
  )
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      message: "Password does not match",
      path: ["confirmPassword"],
    }
  );

export type MarathonForm = z.infer<typeof marathonSchema>;