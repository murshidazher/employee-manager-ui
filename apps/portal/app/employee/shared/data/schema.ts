import { z } from "zod";

// We're keeping a simple non-relational schema here.
export const employeeSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  number: z.string(),
  gender: z.string().regex(/^M|F$/, { message: "Gender must be 'M' or 'F'" }),
  photo: z.string().url(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const employeeAddFormSchema = z.object({
  firstName: z.string().regex(/^[A-Za-z]{6,10}$/, {
    message:
      "Should only consist alphabets, min 6 characters, max 10 characters",
  }),
  lastName: z.string().regex(/^[A-Za-z]{6,10}$/, {
    message:
      "Should only consist alphabets, min 6 characters, max 10 characters",
  }),
  number: z.string().regex(/^(\+94|0)(7\d{8})$/, {
    message: "Should be a valid LK number starting with +94|07",
  }),
  email: z.string().email({ message: "Should be a valid email" }),
  gender: z.string().refine((val) => val === "M" || val === "F", {
    message: "Gender should be 'M' or 'F'.",
  }),
});

export type Employee = z.infer<typeof employeeSchema>;
export type EmployeeAddForm = z.infer<typeof employeeAddFormSchema>;
