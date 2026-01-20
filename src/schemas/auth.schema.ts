import {z} from 'zod';

export const formSchema = z.object({
    username: z.string().trim().min(3, {error: 'Username must be at least 3 characters'}),
    password:z.string().trim().min(5,{error: 'Password must be at least 5 characters'}),
    firstname: z.string().trim().optional(),
    lastname: z.string().trim().optional(),
    email: z.email('Invalid email address').min(1, {error: "Email is required"}),
});

export type FormValues = z.infer<typeof formSchema>;

export const loginSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(5, {error: 'Password must be at least 5 characters'}),
});

export type LoginValues = z.infer<typeof loginSchema>;