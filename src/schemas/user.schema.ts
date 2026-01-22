import {z} from 'zod';

export const userSchema = z.object({
    username: z.string().min(3, {error: 'Username must be at least 3 characters'}),
    password:z.string().min(5,{error: 'Password must be at least 5 characters'}),
    firstname: z.string().optional(),
    lastname: z.string().optional(),
    email: z.email('Invalid email address').min(1, {error: "Email is required"}),
    area: z.string(),
    street: z.string(),
    number: z.string(),
    po: z.string(),
    municipality: z.string(),
    phoneType: z.enum(['phone', 'home', 'work']).optional().or(z.literal("")),
    phoneNumber: z.string().optional(),
});

export type User = z.infer<typeof userSchema>;