import {z} from 'zod';

export const registerSchema = z.object({
    firstname: z.string().min(1, "Firstname is required"),
    lastname: z.string().min(1, "Lastname is required"),
    username: z.string().min(1, "Username is required"),
    email: z
        .string()
        .regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email"),
    password: z
        .string()
        .regex(
            /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[@#$!%&*]).{8,}$/,
            "Password needs upper, lower, digit, special char (@#$!%&*), min 8"
        ),
    dateOfBirth: z.string().min(1, "Date of birth is required"),
    gender: z.enum(["MALE", "FEMALE", "OTHER"], {
        message: "Gender is required",
    }),
    role: z.literal("MEMBER", { message: "Role is required" }),
});

export type RegisterUser = z.infer<typeof registerSchema>;
