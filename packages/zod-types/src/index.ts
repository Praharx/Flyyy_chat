import {z} from "zod";

export const signUpSchema = z.object({
    email: z.string().email(),
    password:z.string().min(8),
    username:z.string()
})

export type signUpType = z.infer<typeof signUpSchema>

export const signInSchema = z.object({
    email:z.string().email(),
    password: z.string().min(8)
})

export type signInType = z.infer<typeof signInSchema>