import { z } from 'zod'

const createZodSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email(),
    password: z.string({
      required_error: 'password is required',
    }),
    phoneNo: z.string({
      required_error: 'phone no is required',
    }),
    profileImg: z.string().optional(),
  }),
})
export const UserValidation = {
  createZodSchema,
}
