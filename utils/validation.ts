import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

export const ContactFormSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Format email tidak valid"),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

export const validateContactForm = async (
  data: unknown,
): Promise<ContactFormData> => {
  return ContactFormSchema.parseAsync(data);
};

export const UserSchema = z.object({
  username: z.string().min(3, "Username minimal 3 karakter"),
  password: z
    .string()
    .min(8, "Password minimal 8 karakter")
    .regex(/[A-Z]/, "Password harus mengandung huruf kapital")
    .regex(/[0-9]/, "Password harus mengandung angka")
    .regex(/[^A-Za-z0-9]/, "Password harus mengandung karakter khusus"),
  email: z.string().email("Format email tidak valid"),
});

export type UserData = z.infer<typeof UserSchema>;

export const validateUser = async (data: unknown): Promise<UserData> => {
  return UserSchema.parseAsync(data);
};
