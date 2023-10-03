import { z } from 'zod'

const createZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    email: z.string({
      required_error: 'Email is required',
    }),
    review: z.string({
      required_error: 'Review is required',
    }),
    rating: z.string({
      required_error: 'Rating is required',
    }),
  }),
})

export const ReviewValidation = {
  createZodSchema,
}
