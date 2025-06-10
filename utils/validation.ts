import { z } from "zod";

export interface ValidationResult<T> {
  success: boolean;
  data?: T;
  errors?: Record<string, string>;
}

/**
 * Validates form data against a Zod schema
 * @param formData The FormData object to validate
 * @param schema The Zod schema to validate against
 * @returns ValidationResult with parsed data or errors
 */
export async function validateFormData<T>(
  formData: FormData,
  schema: z.ZodType<T>,
): Promise<ValidationResult<T>> {
  // Convert FormData to a plain object
  const formDataObj: Record<string, unknown> = {};

  for (const [key, value] of formData.entries()) {
    formDataObj[key] = value;
  }

  try {
    const validData = schema.parse(formDataObj);
    return await Promise.resolve({
      success: true,
      data: validData,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const fieldErrors: Record<string, string> = {};

      for (const issue of error.issues) {
        const path = issue.path.join(".");
        fieldErrors[path] = issue.message;
      }

      return await Promise.resolve({
        success: false,
        errors: fieldErrors,
      });
    }

    // For other errors, return a generic error
    return await Promise.resolve({
      success: false,
      errors: {
        _form: "An unexpected error occurred during validation",
      },
    });
  }
}

/**
 * Common validation schemas
 */
export const validationSchemas = {
  email: z.string().email("Please enter a valid email address"),

  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),

  phone: z.string()
    .regex(/^[0-9+\-\s()]{8,20}$/, "Please enter a valid phone number"),

  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),

  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
}; 